import React from "react";
import { View } from "react-native";
import { Profile, Texto, Container } from "../../components/atoms";
import { Card, Tag,IconComponent } from "../../components/molecules";
import { Text } from "react-native";
import { theme } from "../../styles";


const FAKE_DATA = [
    {
        name: 'Darth Vader',
        image_url: 'https://br.web.img3.acsta.net/newsv7/22/05/06/20/55/4497665.jpg',
        nameLocal: 'Hospital Israelita Albert Einstein',
        description: 'Lorem ipsum 19, st 13 sit amet, consectetur ...',
        sector: 'Setor : Pediatria, Bloco C12, 12º Andar ',
        valor:'R$1200,00'
    }
]

export const Home = () => {
    return (
        <View>

            <Texto fontFamily="lato_bold" size={24} color='ocean'
                marginLeft={34} marginTop={144}> Boa tarde, {FAKE_DATA[0].name}</Texto>

            <Profile url_image={FAKE_DATA[0].image_url} />

            <Container align="center" marginTop={12}>
                <Texto fontFamily="lato_bold" size={24} color='dark'> {FAKE_DATA[0].name}</Texto>
            </Container>
            <Texto fontFamily="regular"
                marginTop={34}
                marginLeft={34}
                size={12}
                color='gray'> Informações do plantão</Texto>

            <Container dir="row" marginTop={12} marginLeft={34}>
                <Card item={{ image_url: FAKE_DATA[0].image_url }} />
                <Container>
                    <Texto fontFamily="regular" size={12} color='dark'> {FAKE_DATA[0].nameLocal}</Texto>
                    
                    <Tag margin={10} color='orange'>Pediatria</Tag>
                    <View style={{ flexDirection: 'row' }}>
                       <IconComponent  iconName='location-outline'/>
                       <Text style={{ flex: 1, flexWrap: 'wrap', fontFamily: theme.fonts.regular, fontSize: 12 }}> {FAKE_DATA[0].description}</Text>
                    </View>
                    <View style={{ flexDirection: 'row' , marginTop: 12}}>
                       <IconComponent  iconName='medical-outline'/>
                       <Text style={{ flex: 1, flexWrap: 'wrap', fontFamily: theme.fonts.regular, fontSize: 12 }}> {FAKE_DATA[0].sector}</Text>
                    </View>
                    
                </Container>     

            </Container>
            <Container marginTop={16} marginRight={34} align='flex-end'>
                    <Texto fontFamily="regular" size={16} color='dark'> Valor: {FAKE_DATA[0].valor}</Texto>
            </Container>
            
        </View>
    )
}

