import { View, ScrollView} from "react-native"
import React, { useState } from 'react'
import {
    Container,
    FieldText,
    Title,
    Input,
    Button,
    CircleAvatar,
    SelectedItens
} from "../../../components"
import iconDoctor from '../../../../assets/doctor.png'
import { Keyboard } from "react-native";

const curso = [
    {nome:"Cursos", value:false},
    {nome:"Enfermagem",value:0},
    {nome:"Medicina",value:1},
    {nome:"Fisioterapia",value:2}
]

const periodo = [
    {nome:"Periodo", value:false},
    {nome:"P1",value:1},
    {nome:"P2",value:2},
    {nome:"P3",value:3},
]


export const RegisterProfile = ({ navigation }) => {

    const [inputs, setInputs] = React.useState({
        nome: '',
        rgm: '',
        curso: '',
        periodo: '',
    });

    const [errors, setErrors] = useState({});

    const validate = () => {
        Keyboard.dismiss();
        let isValid = true;

        if (!inputs.nome) {
            handleError('Por favor insira o nome', 'nome');
            isValid = false;
        }

        if (!inputs.rgm) {
            handleError('Por favor insira o rgm', 'rgm');
            isValid = false;
        }else if(!inputs.rgm.match(/^[0-9]+$/)){
            handleError('Deve ser do tipo numerico', 'rgm');
            isValid = false;
        }


        if (inputs.periodo == false) {
            handleError('Por favor escolha o periodo do seu curso', 'periodo');
            isValid = false;
        }

        if (inputs.curso == false) {
            handleError('Por favor escolha o curso de sua graduacão', 'curso')
        }

        
        if(isValid){
            navigation.navigate('RegisterEmail', {inputs})
        }
    }
    
    console.log(inputs)
    const handleOnchange = (text, input) => {
        setInputs(prevState => ({ ...prevState, [input]: text }));
    };

    const handleError = (error, input) => {
        setErrors(prevState => ({ ...prevState, [input]: error }));
    };

    
    return (
        <View>
            <ScrollView>
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
                        size={14}
                    >
                        Adicione suas credênciais para continuar
                    </FieldText>
                </Container>
                <Container marginTop={28}
                    align="center">
                    <CircleAvatar icon={iconDoctor} />
                </Container>
                <Container marginTop={12}
                    align="center">

                    <Input
                            onChangeText={text => handleOnchange(text, 'nome')}
                            onFocus={() => handleError(null, 'nome')}
                            value={inputs.nome}
                            error={errors.nome}
                            placeholder="Nome"
                    />
                    <Input  
                            marginTop={16}
                            onChangeText={text =>  handleOnchange(text, 'rgm')}
                            onFocus={() => handleError(null, 'rgm')}
                            value={inputs.rgm}
                            error={errors.rgm}
                            placeholder="RGM"
                    />
                    <SelectedItens
                        marginTop={16}
                        itens={curso}
                        value={inputs.curso}
                        filterSelected={'curso'}
                        onFocus={() => handleError(null, 'curso')}
                        onChange={handleOnchange}
                        error={errors.curso}
                    />
                    <SelectedItens
                        marginTop={16}
                        itens={periodo}
                        value={inputs.periodo}
                        filterSelected={'periodo'}
                        onFocus={() => handleError(null, 'periodo')}
                        onChange={handleOnchange}
                        error={errors.periodo}
                    />
                </Container>
                <Container 
                   marginTop={12} 
                   marginBottom={12}
                   align="center">
                    <Button onPress={() => validate()}>Proximo</Button>
                </Container>
            </ScrollView>
        </View>
    )
}
