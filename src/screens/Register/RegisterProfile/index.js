import { View, ScrollView, StyleSheet } from "react-native"
import React, { useState } from 'react'
import {
    Container,
    FieldText,
    Title,
    Input,
    Button,
    CircleAvatar
} from "../../../components"
import iconDoctor from '../../../../assets/doctor.png'
import styled from 'styled-components/native';
import { Picker } from '@react-native-picker/picker';
import { theme } from '../../../styles/theme';
import { Keyboard } from "react-native";


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
        }else if(!inputs.rgm.match(/[0-9]/)){
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
                    <Container marginBottom={16}>

                        <Input
                            onChangeText={text => handleOnchange(text, 'nome')}
                            onFocus={() => handleError(null, 'nome')}
                            value={inputs.nome}
                            placeholder="Nome"
                        />

                        {errors.nome && <FieldText
                            marginTop={8}
                            fontFamily="regular"
                            color="red"
                            size={12}>{errors.nome}</FieldText>}
                    </Container>
                </Container>
                <Container marginTop={12}
                    align="center">

                    <Container marginBottom={16}>

                        <Input
                            onChangeText={text => handleOnchange(text, 'rgm')}
                            value={inputs.rgm}
                            placeholder="RGM"
                        />
                    {errors.rgm && <FieldText
                        marginTop={8}
                        fontFamily="regular"
                        color="red"
                        size={12}>{errors.rgm}</FieldText>}
                    </Container>
                </Container>
                
                <Container 
                    marginTop={12}
                    marginBottom={12}
                    marginLeft={50} >
                    <InputContainer>
                        <Picker
                            style={styles.container}
                            selectedValue={inputs.curso}
                            onFocus={() => handleError(null, 'curso')}
                            onValueChange={(itemValue) =>
                                handleOnchange(itemValue, 'curso')
                            }

                        >
                            <Picker.Item label="Curso" value={false} />
                            <Picker.Item label="Enfermagem" value={0} />
                            <Picker.Item label="Medicina" value={1} />
                            <Picker.Item label="Fisioterapia" value={2} />
                        </Picker>
                    </InputContainer>
                    {errors.curso && <FieldText
                            marginTop={8}
                            fontFamily="regular"
                            color="red"
                            size={12}>{errors.curso}</FieldText>}
                </Container>
                <Container 
                    marginTop={12}
                    marginBottom={12}
                    marginLeft={50} >
                    <InputContainer>
                        <Picker
                            style={styles.container}
                            selectedValue={inputs.periodo}
                            onValueChange={(itemValue) =>
                                handleOnchange(itemValue, 'periodo')
                            }>
                            <Picker.Item label="Periodo" value={false} />
                            <Picker.Item label="P1" value={1} />
                            <Picker.Item label="P2" value={2} />
                            <Picker.Item label="P3" value={3} />
                        </Picker>
                    </InputContainer>
                    {errors.periodo && <FieldText
                            marginTop={8}
                            fontFamily="regular"
                            color="red"
                            size={12}>{errors.periodo}</FieldText>}
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

const InputContainer = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: ${({ dir }) => dir || 'row'};
  width: ${({ theme }) => theme.metrics.px(256)}px;
  height: ${({ theme }) => theme.metrics.px(42)}px;
  border-radius: ${({ theme }) => theme.metrics.px(4)};
  border-width: ${({ theme }) => theme.metrics.px(1)}px;
  border-color: ${({ theme }) => theme.colors.ocean};
  padding: ${({ theme }) => theme.metrics.px(6)}px;
  margin-top: ${({ theme, mt }) => theme.metrics.px(mt || 0)}px;
  margin-bottom: ${({ theme, mb }) => theme.metrics.px(mb || 0)}px;
  margin-left: ${({ theme, ml }) => theme.metrics.px(ml || 0)}px;
  margin-right: ${({ theme, mr }) => theme.metrics.px(mr || 0)}px;
`

const styles = StyleSheet.create({
    container: {
        width: '100%',
        borderColor: theme.colors.ocean,
        borderWidth: 5,
    },
});