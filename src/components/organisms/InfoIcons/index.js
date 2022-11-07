import { Container, FieldText } from "../../atoms"
import { IconComponent } from "../../molecules"
import { View, Text } from "react-native";
import { theme } from "../../../styles";

export const InfoPlantao = ({ info }) => {

    const { description, sector, data, horaInicio, horaFim, valor } = info
    return (
        <View>
            <Container marginLeft={34} marginTop={12}>

                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <IconComponent iconName='location-outline' />
                    <Text style={{ flex: 1, flexWrap: 'wrap', fontFamily: theme.fonts.regular, fontSize: 12 }}> {description}</Text>
                </View>
                <View style={{ flexDirection: 'row', marginTop: 12, alignItems: 'center' }}>
                    <IconComponent iconName='medical-outline' />
                    <Text style={{ flex: 1, flexWrap: 'wrap', fontFamily: theme.fonts.regular, fontSize: 12 }}> {sector}</Text>
                </View>
                <View style={{ flexDirection: 'row', marginTop: 12, alignItems: 'center' }}>
                    <IconComponent iconName='calendar-outline' />
                    <Text style={{ flex: 1, flexWrap: 'wrap', fontFamily: theme.fonts.regular, fontSize: 12 }}> {data}</Text>
                </View>
                <View style={{ flexDirection: 'row', marginTop: 12, alignItems: 'center' }}>
                    <IconComponent iconName='alarm-outline' />
                    <Text style={{ flex: 1, flexWrap: 'wrap', fontFamily: theme.fonts.regular, fontSize: 12 }}> {horaInicio + ' - ' + horaFim}</Text>
                </View>
            </Container>
            <Container marginTop={16} marginRight={34} align='flex-end'>
                    <FieldText fontFamily="regular" size={16} color='dark'> Valor: {valor}</FieldText>
            </Container>
        </View>


    )
}
