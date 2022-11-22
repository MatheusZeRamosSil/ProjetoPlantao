import { View } from 'react-native'
import styled from 'styled-components/native'
import React, { useState, useEffect } from 'react'
import {
    Container,
    FieldText,
    Title,
    Input,
    Button
} from "../../../components"

export const RegisterEmail = () => {
    const [query, setQuery] = useState('')
    return(
        <View>
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
            <Container marginTop={40}
                align="center">
                <Input
                    mb={24}
                    value={query}
                    onChangeText={(text) => setQuery(text)}
                    placeholder="Email"
                />
                   <Input
                    mb={24}
                    value={query}
                    onChangeText={(text) => setQuery(text)}
                    placeholder="Senha"
                />
                 <Button>Proximo</Button>
            </Container>
        </View>
    )
}
