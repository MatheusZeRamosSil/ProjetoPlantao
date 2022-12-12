import { View } from 'react-native'
import React, { useState, useEffect } from 'react'
import { useGetData } from '../../../services/hooks/useGetData'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {
    Container,
    FieldText,
    Title,
    Input,
    Button
} from "../../../components"
import { useRoute } from '@react-navigation/native'
import { Keyboard } from "react-native";

export const RegisterEmail = ({ navigation }) => {
    const route = useRoute();
    const { createNewUser } = useGetData()
    const [click, setClick] = useState(false)

    const [inputs, setInputs] = React.useState({
        nome: route.params.inputs.nome,
        rgm: route.params.inputs.rgm,
        graduacao: route.params.inputs.curso,
        periodoInterno: route.params.inputs.periodo,
        email: '',
        senha: '',
        telefone: ''
    });
    const [errors, setErrors] = useState({});
    const [hidePassword, setHidePassword] = React.useState(inputs.senha);

    console.log(inputs)
    const registerNewUser = async () => {

        const result = await useGetData().createNewUser(inputs)


        console.log(result)
        if (result == 201) {
            navigation.navigate('Login')

        }
    }

    const validate = () => {
        Keyboard.dismiss();
        let isValid = true;

        if (!inputs.email) {
            handleError('Por favor insira o email', 'email');
            isValid = false;
        } else if (!inputs.email.match(/\S+@\S+\.\S+/)) {
            handleError('Por favor insira o email valido', 'email');
            isValid = false;
        }


        if (!inputs.senha) {
            handleError('Por favor insira uma senha', 'senha')
            isValid = false;
        } else if (!inputs.senha.length >= 5) {
            handleError('A senha deve ser no minino de 5 caracteres', 'senha')
            isValid = false;
        }

        if (!inputs.telefone) {
            handleError('Por favor insira o numero de telefone', 'telefone')
            isValid = false;
        } else if (!inputs.telefone.match(/[0-9]/)) {
            handleError('O telefone deve conter somente numeros', 'telefone')
            isValid = false;
        }

        if (isValid) {
            setClick(true)
        }


    }
    const handleOnchange = (text, input) => {
        setInputs(prevState => ({ ...prevState, [input]: text }));
    };

    const handleError = (error, input) => {
        setErrors(prevState => ({ ...prevState, [input]: error }));
    };

    useEffect(() => {
        if (click) {
            registerNewUser()
        }
    }, [click])
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
            <Container marginTop={12}
                align="center">

                <Container marginBottom={16}>

                    <Input
                        onChangeText={text => handleOnchange(text, 'telefone')}
                        onFocus={() => handleError(null, 'telefone')}
                        value={inputs.telefone}
                        placeholder="Telefone"
                    />
                    {errors.telefone && <FieldText
                        marginTop={8}
                        fontFamily="regular"
                        color="red"
                        size={12}>{errors.telefone}</FieldText>}
                </Container>
            </Container>
            <Container marginTop={12}
                align="center">

                <Container marginBottom={16}>

                    <Input
                        onChangeText={text => handleOnchange(text, 'email')}
                        onFocus={() => handleError(null, 'email')}
                        value={inputs.email}
                        placeholder="Email"
                    />
                    {errors.email && <FieldText
                        marginTop={8}
                        fontFamily="regular"
                        color="red"
                        size={12}>{errors.email}</FieldText>}
                </Container>
            </Container>
            <Container marginTop={12}
                align="center">

                <Container marginBottom={16}>
                    <Input
                        onChangeText={text => handleOnchange(text, 'senha')}
                        onFocus={() => handleError(null, 'senha')}
                        value={inputs.senha}
                        placeholder="Senha"
                    />
                    {errors.senha && <FieldText
                        marginTop={8}
                        fontFamily="regular"
                        color="red"
                        size={12}>{errors.senha}</FieldText>}
                  
                </Container>
            </Container>
            <Container align="center">
                <Button onPress={() => validate()}>Proximo</Button>
            </Container>

        </View>
    )
}
