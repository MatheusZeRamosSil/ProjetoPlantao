import React from "react";
import { View } from "react-native";
import {Container, FieldText } from "../../components/atoms";
import { ScrollView } from "react-native";
import { CheckButton, Tag } from "../../components/molecules";
import { Map, InfoPlantao, InfoPreceptor, Title } from "../../components/organisms";

const FAKE_DATA = [
    {
        name: 'Darth Vader',
        image_url: 'https://br.web.img3.acsta.net/newsv7/22/05/06/20/55/4497665.jpg',
        nameLocal: 'Hospital Israelita Albert Einstein',
        description: 'Hospital Israelita Albert Einstein 19, st 13 sit amet, consectetur ...',
        sector: 'Setor : Pediatria, Bloco C12, 12º Andar ',
        valor: 'R$1200,00',
        graduacao: 'Lado sombrio',
        data: 'Quarta-feira, 12 Outubro 2022',
        horaInicio: '11:30 AM',
        horaFim: '01:30 PM'
    }
]

export const Home = () => {
    return (
        <View>
            <ScrollView>
                <Title>{FAKE_DATA[0].name}</Title>
                <Tag marginTop={10} marginLeft={34} color='orange'>Pediatria</Tag>
                <FieldText
                    fontFamily="regular"
                    marginTop={16}
                    marginLeft={34}
                    size={12}
                    color='gray'>Informações do plantão</FieldText>
                <Map />
                <InfoPlantao info={{
                    description: FAKE_DATA[0].description,
                    sector: FAKE_DATA[0].sector,
                    data: FAKE_DATA[0].data,
                    horaInicio: FAKE_DATA[0].horaInicio,
                    horaFim: FAKE_DATA[0].horaFim,
                    valor: FAKE_DATA[0].valor
                }} />
                <InfoPreceptor 
                    size={80}
                    infoPreceptor={{
                        image_url: FAKE_DATA[0].image_url,
                        name: FAKE_DATA[0].name,
                        graduacao: FAKE_DATA[0].graduacao
                    }} />
                <Container marginTop={20}
                    marginBottom={10}
                    align='center'>
                    <CheckButton />
                </Container>
            </ScrollView>
        </View>
    )
}

