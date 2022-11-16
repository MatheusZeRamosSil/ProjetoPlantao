import React, { useState, useEffect } from 'react';
import { View, ScrollView } from "react-native";
import { Checkout } from "../../components/organisms";
import { ActivityIndicator } from "react-native";
import { Container, ImageCheck } from "../../components";
import { FieldText } from '../../components';
import { CheckButton } from "../../components/molecules";

export const Home = () => {
    const [clickButtonCheckout, setButtonCheckout] = useState(false);
    const [response, setResponse] = useState(null);
    const [testCheckout, setTestCheckout] = useState(false);

    const init = () => {
        setTestCheckout(true);
    }

    const initButton = () => {
        setButtonCheckout(true);
    }


    useEffect(() => {
       
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    if(testCheckout != false){
        return (
            <View>
                <ScrollView>
                    <Container align='center' marginTop={48}>
                        <ImageCheck/>
                        <Container align='center' marginTop={8}>
                            <FieldText
                                fontFamily="lato_bold"
                                size={16}
                                color='dark'>Plantão medico</FieldText>
                            <FieldText
                                fontFamily="lato_bold"
                                size={16}
                                color='dark'>Iniciado</FieldText>
                        </Container>
                    </Container>
                    <Checkout />
                    <Container marginTop={20}
                        marginBottom={10}
                        align='center'>
                        <CheckButton />
                    </Container>
                </ScrollView>
            </View>
        )
    }

    if (clickButtonCheckout != false && response == null) {
        return (
            <View>
                <ScrollView>
                    <Container align='center' marginTop={48}>
                        <ActivityIndicator size="large" color="#0000ff" />
                        <Container align='center' marginTop={8}>
                            <FieldText
                                fontFamily="lato_bold"
                                size={16}
                                color='dark'>Plantão medico</FieldText>
                            <FieldText
                                fontFamily="lato_bold"
                                size={16}
                                color='dark'>Iniciando ...</FieldText>
                        </Container>
                    </Container>
                    <Checkout />
                    <Container marginTop={20}
                        marginBottom={10}
                        align='center'>
                        <CheckButton onPress={init}/>
                    </Container>
                </ScrollView>
            </View>
        )
    }

    if (clickButtonCheckout == false) {
        return (
            <View>
                <ScrollView>
                    <Container
                        align='center'
                        marginTop={48}>
                        <FieldText
                            fontFamily="lato_bold"
                            size={16}
                            color='dark'>Click no botão</FieldText>
                        <FieldText
                            fontFamily="lato_bold"
                            size={16}
                            color='dark'>para iniciar o plantão</FieldText>
                        <Container marginTop={20}
                        marginBottom={10}
                        align='center'>
                        <CheckButton onPress={initButton} />
                    </Container>
                    </Container>
                    <View style={{opacity:0.2}}>
                        <Checkout />
                    </View>
                   
                </ScrollView>
            </View>
        )
    }

}

