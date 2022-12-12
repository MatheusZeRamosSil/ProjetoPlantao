import { View} from "react-native"
import React, { useState, useEffect } from 'react'
import {
    Container,
    FieldText,
    Title,
    Input,
    Button
} from "../../components"
import { useGetData } from "../../services/hooks/useGetData"
import { Keyboard } from "react-native";


export const Login = ({ navigation }) => {
    const {getUser} = useGetData()
    const [click, setClick] = useState(false)
    const [errors, setErrors] = useState({});

    const [input, setInput]= useState({
        rgm:'',
        senha:''
   })

   
    const validate = () =>{
        Keyboard.dismiss()
        let isValid = true;

        if (!input.rgm) {
            handleError('Por favor insira o rgm', 'rgm');
            isValid = false;
        }else if(!input.rgm.match(/[0-9]/)){
            handleError('Deve ser do tipo numerico', 'rgm');
            isValid = false;
        }

        if(!input.senha){
            handleError('Por favor insira uma senha', 'senha')
            isValid = false;
        }

        if(isValid){
            setClick(true)
        }
    }
  

    const handleOnchange = (text, input) => {
        setInput(prevState => ({...prevState, [input]: text}));
    };

    const handleError = (error, input) => {
        setErrors(prevState => ({ ...prevState, [input]: error }));
      };

    const login= async () => {
        const result = await getUser(input.rgm)
        console.log(result)
        if (result != null){
            navigation.navigate('Home', {result})
        }
    }

    useEffect(() => {
        if(click){
            login()
        }
    },[click])
    return (
        <View>
            <Container marginTop={150} marginLeft={24}>
                <Title
                   fontFamily="lato_bold"
                   color="ocean"
                   size={32} 
                >Login</Title>
                <FieldText
                    marginTop={8}
                    fontFamily="regular"
                    color="ocean"
                    size={14}
                >
                    Faça o login para continuar
                </FieldText>
            </Container>
            <Container marginTop={20}
                    align="center">
                    <Container marginBottom={16}>

                        <Input
                            onChangeText={text => handleOnchange(text, 'rgm')}
                            onFocus={() => handleError(null, 'rgm')}
                            value={input.rgm}
                            placeholder="RGM"
                        />

                        {errors.rgm && <FieldText
                            marginTop={8}
                            fontFamily="regular"
                            color="red"
                            size={12}>{errors.rgm}</FieldText>}
                    </Container>
                </Container>
                <Container marginTop={12}
                    align="center">
                    <Container marginBottom={16}>

                        <Input
                            onChangeText={text => handleOnchange(text, 'senha')}
                            onFocus={() => handleError(null, 'senha')}
                            value={input.senha}
                            placeholder="senha"
                        />

                        {errors.senha && <FieldText
                            marginTop={8}
                            fontFamily="regular"
                            color="red"
                            size={12}>{errors.senha}</FieldText>}
                    </Container>
                </Container>
                <Container align="center">
                <Button onPress={() => validate()}>Sign in</Button>
                <Container dir="row" marginTop={12}>
                            <FieldText
                                marginTop={8}
                                fontFamily="regular"
                                color="ocean"
                                size={16}
                            >
                                Não é cadastrado?{" "}
                            </FieldText>
                            <FieldText
                                marginTop={8}
                                fontFamily="lato_bold"
                                color="ocean"
                                size={16 }
                                onPress={() => navigation.navigate('RegisterProfile')}
                            >
                                Fazer cadastro
                            </FieldText>
                        </Container>
                </Container>

        </View>
    )
}