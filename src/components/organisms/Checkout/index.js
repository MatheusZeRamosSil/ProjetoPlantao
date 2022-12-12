import React from "react";
import { View } from "react-native";
import { Container, FieldText } from "../../atoms";
import { CheckButton, Tag } from "../../molecules";
import { Map } from "../Map";
import { InfoPreceptor } from "../InfoPreceptor";
import { Title } from "../Title";

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

export const Checkout = ({nameInterno}) =>{
    return (
        <View>
                <Title fontFamily='regular'
                    size={12}
                    marginLeft={22}
                    marginTop={12}
                    color='gray'>Preceptor</Title>
                <InfoPreceptor
                    size={50}
                    infoPreceptor={{
                        image_url: FAKE_DATA[0].image_url,
                        name: FAKE_DATA[0].name,
                        graduacao: FAKE_DATA[0].graduacao
                    }} />
                
                <Container
                    marginTop={32}
                    marginLeft={22}>
                    <Title fontFamily='regular'
                        size={12}
                        color='gray'>Estagiario</Title>
                    <Title fontFamily='regular'
                        marginTop={12}
                        size={14}
                        color='dark'>{nameInterno}</Title>
                </Container>
                <Container
                    dir='row'
                    marginTop={32}
                    marginLeft={22}>
                    <Container>
                        <Title fontFamily='regular'
                            size={12}
                            color='gray'>Data</Title>
                        <Title fontFamily='regular'
                            marginTop={12}
                            size={14}
                            color='dark'>Seg, 14 Novembro</Title>
                    </Container>
                    <Container marginLeft={62}>
                        <Title fontFamily='regular'
                            size={12}
                            color='gray'>Horario</Title>
                        <Title fontFamily='regular'
                            marginTop={12}
                            size={14}
                            color='dark'>09:00 - 13:00</Title>
                    </Container>
                </Container>
                <Title fontFamily='regular'
                    size={12}
                    marginLeft={22}
                    marginTop={32}
                    color='gray'>Localização</Title>
                <Container
                    marginTop={12}
                    marginLeft={30}>
                    <Title fontFamily='regular'
                        marginTop={4}
                        size={14}
                        color='dark'>Agape Medical Center</Title>
                    <Title fontFamily='regular'
                        size={10}
                        marginTop={6}
                        color='gray'>Lorem ipsum 19, st 13 sit amet, consectetur ...</Title>
                    
                </Container>
                <Map />
        </View>
    )
}