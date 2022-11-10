import React from "react";
import { View } from "react-native";
import { Container, FieldText } from "../../components/atoms";
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
                <Container align='center' marginTop={48}>
                    <FieldText
                        fontFamily="lato_bold"
                        size={16}
                        color='dark'>Plantão medico</FieldText>
                    <FieldText
                        fontFamily="lato_bold"
                        size={16}
                        color='dark'>Iniciando ...</FieldText>
                </Container>


                <Title fontFamily='regular'
                    size={12}
                    marginLeft={22}
                    color='gray'>Preceptor</Title>
                <InfoPreceptor
                    size={50}
                    infoPreceptor={{
                        image_url: FAKE_DATA[0].image_url,
                        name: FAKE_DATA[0].name,
                        graduacao: FAKE_DATA[0].graduacao
                    }} />
                <Title fontFamily='regular'
                    size={12}
                    marginLeft={22}
                    marginTop={32}
                    color='gray'>Equipe</Title>
                <Container
                    marginTop={12}
                    marginLeft={40}>
                    <Title fontFamily='regular'
                        size={12}
                        color='gray'>Estagiario</Title>
                    <Title fontFamily='regular'
                        marginTop={4}
                        size={14}
                        color='dark'>Maria Mostavaya</Title>
                </Container>
                <Container
                    dir='row'
                    marginTop={12}
                    marginLeft={22}>
                    <Container>
                        <Title fontFamily='regular'
                            size={12}
                            color='gray'>Data</Title>
                        <Title fontFamily='regular'
                            marginTop={4}
                            size={14}
                            color='dark'>Maria Mostavaya</Title>
                    </Container>
                    <Container align='flex-end'>
                        <Title fontFamily='regular'
                            size={12}
                            color='gray'>Data</Title>
                        <Title fontFamily='regular'
                            marginTop={4}
                            size={14}
                            color='dark'>Maria Mostavaya</Title>
                    </Container>
                </Container>
                <Map />
                <Container marginTop={20}
                    marginBottom={10}
                    align='center'>
                    <CheckButton />
                </Container>
            </ScrollView>
        </View>
    )
}

