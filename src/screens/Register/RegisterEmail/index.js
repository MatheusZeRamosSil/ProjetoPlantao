import { View } from 'react-native'
import React, { useState,useEffect } from 'react'
import { useGetData } from '../../../services/hooks/useGetData'
import {
    Container,
    FieldText,
    Title,
    Input,
    Button
} from "../../../components"
import { useRoute } from '@react-navigation/native'

export const RegisterEmail = ({ navigation }) => {
    const route = useRoute();
    const {createNewUser} = useGetData()
    const [click, setClick] = useState(false)

    const [inputs, setInputs] = React.useState({
        nome: route.params.inputs.nome,
        rgm: route.params.inputs.rgm,
        graduacao: route.params.inputs.curso,
        periodoInterno: route.params.inputs.periodo,
        email:'',
        senha:'',
        telefone:''
      });
      
      console.log(inputs)
      const registerNewUser = async () =>{
        
        const result = await useGetData().createNewUser(inputs)
       
 
        console.log(result)
        if(result == 201){
            navigation.navigate('Login')

        }
      }

      const handleOnchange = (text, input) => {
        setInputs(prevState => ({...prevState, [input]: text}));
      };

    useEffect(() => {
        if(click){
            registerNewUser()
        }
    },[click])
    return (
        <View>
            <Container marginTop={120}
                marginLeft={24}>
                <Title
                    fontFamily="lato_bold"
                    color="ocean"
                    size={32}
                >Cadastro</Title>
                <FieldText
                    marginTop={8}
                    fontFamily="regular"
                    color="ocean"
                    size={12}
                >
                    Adicione suas credênciais para continuar
                </FieldText>
            </Container>
            <Container marginTop={40}
                align="center">
                <Input
                    mb={24}
                    value={inputs.telefone}
                    onChangeText={(text) => handleOnchange(text,'telefone')}
                    placeholder="Telefone"
                />
                <Input
                    mb={24}
                    value={inputs.email}
                    onChangeText={(text) => handleOnchange(text,'email')}
                    placeholder="Email"
                />
                <Input
                    mb={24}
                    value={inputs.senha}
                    onChangeText={(text) => handleOnchange(text,'senha')}
                    placeholder="Senha"
                />
                <Button onPress={()=> setClick(true)}>Proximo</Button>
            </Container>
        </View>
    )
}
