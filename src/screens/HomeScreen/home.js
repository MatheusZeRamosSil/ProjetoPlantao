import React from "react";
import { View } from "react-native";
import { Profile, Text, Container } from "../../components/atoms";
import { Card, Tag } from "../../components/molecules";


const FAKE_DATA = [
    {
        name: 'Darth Vader',
        image_url: 'https://br.web.img3.acsta.net/newsv7/22/05/06/20/55/4497665.jpg',
        nameLocal: 'Hospital Israelita Albert Einstein',
        description:'Lorem ipsum 19, st 13 sit amet, consectetur ...',
    }
]

export const Home = () => {
    return (
        <View>

            <Text fontFamily="lato_bold" size={24} color='ocean'
                marginLeft={34} marginTop={144}> Boa tarde, {FAKE_DATA[0].name}</Text>

            <Profile url_image={FAKE_DATA[0].image_url} />

            <Container align="center" marginTop={12}>
                <Text fontFamily="lato_bold" size={24} color='dark'> {FAKE_DATA[0].name}</Text>
            </Container>
            <Text fontFamily="regular"
                marginTop={34}
                marginLeft={34}
                size={12}
                color='gray'> Informações do plantão</Text>

            <Container dir="row" marginTop={13} marginLeft={34}>
                <Card item={{ image_url: FAKE_DATA[0].image_url }} />
                <Container>
                <Text fontFamily="regular" size={12} color='dark'> {FAKE_DATA[0].nameLocal}</Text>
                <Text fontFamily="regular" size={12} color='dark'> {FAKE_DATA[0].description}</Text>
                </Container>
                
            </Container>

        </View>
    )
}

