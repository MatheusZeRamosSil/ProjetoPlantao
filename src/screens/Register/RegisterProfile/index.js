import { View, Linking, ScrollView } from "react-native"
import React, { useState, useEffect } from 'react'
import {
    Container,
    FieldText,
    Title,
    Input,
    Button
} from "../../../components"

import styled from 'styled-components/native'
import iconDoctor from '../../../../assets/doctor.png'

export const RegisterProfile = ({ navigation }) => {
    const [query, setQuery] = useState('')
    return (
        <View>
            <ScrollView>
            <Container marginTop={120}
                marginLeft={24}>
                <Title>Cadastro</Title>
                <FieldText
                    marginTop={8}
                    fontFamily="regular"
                    color="ocean"
                    size={12}
                >
                    Adicione suas credênciais para continuar
                </FieldText>
            </Container>
            <Container marginTop={28}
                align="center">
                <Circle>
                    <AvatarImage source={iconDoctor} />
                </Circle>
            </Container>
            <Container marginTop={12}
                align="center">
                <Input
                    mb={24}
                    value={query}
                    onChangeText={(text) => setQuery(text)}
                    placeholder="Nome"
                />
                   <Input
                    mb={24}
                    value={query}
                    onChangeText={(text) => setQuery(text)}
                    placeholder="Sobrenome"
                />
                   <Input
                    mb={24}
                    value={query}
                    onChangeText={(text) => setQuery(text)}
                    placeholder="RGM"
                />
                 <Button onPress={() => navigation.navigate("RegisterEmail")}>Proximo</Button>
            </Container>
            </ScrollView>
        </View>
    )
}

const Circle = styled.View`
    width: ${({ theme }) => theme.metrics.px(150)}px;
    height: ${({ theme }) => theme.metrics.px(150)}px;
    border-radius: ${({ theme }) => theme.metrics.px(150)}px;
    border-width: ${({ theme }) => theme.metrics.px(4)}px;
    border-color: ${({ color, theme }) => theme.colors[color || 'ocean']};
    align-items:center;
    justify-content: center;
`

const AvatarImage = styled.ImageBackground`
  width: 80%;
  height: 82%;
  margin-left: ${({ theme }) => theme.metrics.px(23)}px;
  margin-top: ${({ theme }) => theme.metrics.px(12)}px;
`



