import { View, Linking } from "react-native"
import React, { useState, useEffect } from 'react'
import {
    Container,
    FieldText,
    Title,
    Input,
    Button
} from "../../components"


export const Login = ({ navigation }) => {
    const [query, setQuery] = useState('')

    return (
        <View>
            <Container marginTop={150} marginLeft={24}>
                <Title>Login</Title>
                <FieldText
                    marginTop={8}
                    fontFamily="regular"
                    color="ocean"
                    size={12}
                >
                    Faça o login para continuar
                </FieldText>
                <Container marginTop={8}>
                    <Container align='center'
                        marginLeft={24}
                        marginTop={38}>
                        <Input
                            mb={24}
                            value={query}
                            onChangeText={(text) => setQuery(text)}
                            placeholder="RGM"
                        />
                        <Input
                            mb={24}
                            value={query}
                            onChangeText={(text) => setQuery(text)}
                            placeholder="Password"
                        />
                        <Button>Sign in</Button>
                        <Container dir="row" marginTop={12}>
                            <FieldText
                                marginTop={8}
                                fontFamily="regular"
                                color="ocean"
                                size={12}
                            >
                                Não é cadastrado?{" "}
                            </FieldText>
                            <FieldText
                                marginTop={8}
                                fontFamily="lato_bold"
                                color="ocean"
                                size={12}
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