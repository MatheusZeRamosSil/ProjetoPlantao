import { StyleSheet,View } from "react-native";
import MapView from 'react-native-maps';

export const Map = () => {
    return (
        <View style={styles.container}>
            <MapView

                style={styles.map}
                region={{
                    latitude: -7.1188352,
                    longitude: -34.8814339,
                    latitudeDelta: 0.015,
                    longitudeDelta: 0.0121,
                }}
            >
            </MapView>
        </View>

    )
}

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