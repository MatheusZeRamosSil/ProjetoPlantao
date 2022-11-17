import React, { useState, useEffect } from 'react';
import { View, ScrollView } from "react-native";
import { Checkout, State } from "../../components/organisms";
import { Container} from "../../components";
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
                    <View style={{opacity:0.3}}>
                        <Checkout />
                    </View>
                   
                </ScrollView>
            </View>
        )
    }
    
    return (
        <View>
            <ScrollView>
            <Container align='center' marginTop={48}>
            <State props={{
                        clickButtonCheckout:clickButtonCheckout,
                        testCheckout:testCheckout}}/>
            </Container>
                    
                    <Checkout />
                      <Container marginTop={20}
                    marginBottom={10}
                    align='center'>
                    <CheckButton onPress={init} />
                </Container>
            </ScrollView>
        </View>
    )
    

}

