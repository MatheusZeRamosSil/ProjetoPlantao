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
import { useForm, Controller } from "react-hook-form";
import styled from 'styled-components/native';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Picker } from '@react-native-picker/picker';
import {theme} from '../../../styles/theme';


const schema = yup.object({
    firstName: yup.string().required("Adicione seu nome"),
    registerMatricula: yup.number().positive("Valor invalido").integer().min(8, "Numero de caracteres insuficiente").required("Adicione seu RGM")
})

export const RegisterProfile = ({ navigation }) => {
        
    const [inputs, setInputs] = React.useState({
        nome: '',
        rgm: '',
        curso: '',
        periodo: '',
      });

    const { control, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });

    const onSubmit = () => {
        console.log(inputs)
    }

    const handleOnchange = (text, input) => {
        setInputs(prevState => ({...prevState, [input]: text}));
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
                        <Controller
                            name="firstName"
                            control={control}
                            rules={{
                                required: true,
                            }}
                            render={({ field: { onChange, onBlur, value } }) => (
                                <Input
                                    onChangeText={text => handleOnchange(text,'nome')}
                                    onBlur={onBlur}
                                    value={value}
                                    placeholder="Nome"
                                />
                            )}
                        />
                        {errors.firstName && <FieldText
                            marginTop={8}
                            fontFamily="regular"
                            color="red"
                            size={12}>{errors.firstName?.message}</FieldText>}
                    </Container>
                </Container>
                <Container marginTop={12}
                    align="center">

                    <Container marginBottom={16}>
                        <Controller
                            name="registerMatricula"
                            control={control}
                            rules={{
                                required: true,
                            }}
                            render={({ field: { onChange, onBlur, value } }) => (
                                <Input
                                    onChangeText={text => handleOnchange(text,'rgm')}
                                    onBlur={onBlur}
                                    value={value}
                                    placeholder="RGM"
                                />
                            )}
                        />

                    </Container>
                </Container>

                <Container marginBottom={16}
                    marginLeft={50}>
                    {errors.registerMatricula && <FieldText
                        marginTop={8}
                        fontFamily="regular"
                        color="red"
                        size={12}>{errors.registerMatricula?.message}</FieldText>}
                </Container>
               
                <Container marginBottom={28}
                    marginLeft={50} >
                <InputContainer>
                <Picker
                    style={styles.container}
                    selectedValue={inputs.curso}
                    onValueChange={(itemValue) =>
                        handleOnchange(itemValue,'curso')
                    }
                   
                    >
                    <Picker.Item label="Curso"/>
                    <Picker.Item label="Enfermagem" value="0" />
                    <Picker.Item label="Medicina" value="1" />
                    <Picker.Item label="Fisioterapia" value="2" />
                </Picker>
                </InputContainer>
                </Container>
                <Container marginBottom={16}
                    marginLeft={50} >
                <InputContainer>
                <Picker
                    style={styles.container}
                    selectedValue={inputs.periodo}
                    onValueChange={(itemValue) =>
                       handleOnchange(itemValue,'periodo')
                    }>
                    <Picker.Item label="Periodo"/>
                    <Picker.Item label="P1" value="1" />
                    <Picker.Item label="P2" value="2" />
                    <Picker.Item label="P3" value="3" />
                </Picker>
                </InputContainer>
                </Container>
                <Container align="center">
                    <Button onPress={() => navigation.navigate('RegisterEmail', {inputs})}>Proximo</Button>
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
        width:'100%',
        borderColor:theme.colors.ocean,
        borderWidth: 5,
    },
});