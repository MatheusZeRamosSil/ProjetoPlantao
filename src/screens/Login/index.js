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

export const Login = ({ navigation }) => {
   
    const [input, setInput]= useState({
    rgm:'',
    senha:''
   })
    
   const {getUser} = useGetData()
   const [click, setClick] = useState(false)

    const handleOnchange = (text, input) => {
        setInput(prevState => ({...prevState, [input]: text}));
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
                <Container marginTop={8}>
                    <Container align='center'
                        marginLeft={24}
                        marginTop={38}>
                        <Input
                            mb={24}
                            value={input.rgm}
                            onChangeText={(text) => handleOnchange(text,'rgm')}
                            placeholder="RGM"
                        />
                        <Input
                            mb={24}
                            value={input.senha}
                            onChangeText={(text) => handleOnchange(text,'senha')}
                            placeholder="Password"
                        />
                        <Button onPress={() => setClick(true)}
                               >Sign in</Button>
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
                </Container>
            </Container>

        </View>
    )
}