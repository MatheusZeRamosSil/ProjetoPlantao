import React from "react";
import { View } from "react-native";
import { Profile, Texto, Container } from "../../components/atoms";
import { Card, Tag, IconComponent } from "../../components/molecules";
import { Text } from "react-native";
import { theme } from "../../styles";
import MapView from 'react-native-maps';
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        marginTop: 12,
        marginLeft: 18,
        height: 200,
        width: 350,
        justifyContent: 'center',
        alignItems: 'center',
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },
});


const FAKE_DATA = [
    {
        name: 'Darth Vader',
        nameLocal: 'Hospital Israelita Albert Einstein',
        description: 'Hospital Israelita Albert Einstein 19, st 13 sit amet, consectetur ...',
        sector: 'Setor : Pediatria, Bloco C12, 12º Andar ',
        valor: 'R$1200,00'
    }
]

export const Home = () => {
    return (
        <View>

            <Texto fontFamily="lato_bold" size={24} color='ocean'
                marginLeft={34} marginTop={80}> Boa tarde, {FAKE_DATA[0].name}</Texto>
            <Tag marginTop={10} marginLeft={34} color='orange'>Pediatria</Tag>
            <Texto fontFamily="regular"
                marginTop={16}
                marginLeft={34}
                size={12}
                color='gray'> Informações do plantão</Texto>

            <View style={styles.container}>
                <MapView

                    style={styles.map}
                    region={{
                        latitude: 37.78825,
                        longitude: -122.4324,
                        latitudeDelta: 0.015,
                        longitudeDelta: 0.0121,
                    }}
                >
                </MapView>
            </View>
            <Container marginLeft={34} marginTop={12}>
                
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <IconComponent iconName='location-outline' />
                    <Text style={{ flex: 1, flexWrap: 'wrap', fontFamily: theme.fonts.regular, fontSize: 12 }}> {FAKE_DATA[0].description}</Text>
                </View>
                <View style={{ flexDirection: 'row', marginTop: 12, alignItems: 'center' }}>
                    <IconComponent iconName='medical-outline' />
                    <Text style={{ flex: 1, flexWrap: 'wrap', fontFamily: theme.fonts.regular, fontSize: 12 }}> {FAKE_DATA[0].sector}</Text>
                </View>
            </Container>
            <Container marginTop={16} marginRight={34} align='flex-end'>
                <Texto fontFamily="regular" size={16} color='dark'> Valor: {FAKE_DATA[0].valor}</Texto>
            </Container>

            <Texto fontFamily="regular" 
                   size={16} 
                   marginLeft={32}
                   marginTop={32}>Preceptor</Texto>

        </View>
    )
}

