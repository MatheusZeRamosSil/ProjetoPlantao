import { StyleSheet, View } from "react-native";
import MapView, { Circle, Marker } from 'react-native-maps';
import { useLocation } from "../../../services/location";
import React, { useState, useEffect } from 'react';

export const Map = () => {
    const { getPermissionLocationForeground, getCurrentLocation } = useLocation();
    const [location, setLocation] = useState(null);
    const [error, setError] = useState(null);

    const initLocationCurrent = async () => {
        let permissions = await getPermissionLocationForeground();
        let locationCurrentDevice = await getCurrentLocation(permissions);

        console.log({ permissions })
        setLocation(locationCurrentDevice);
    }

    console.log(location);

    useEffect(() => {
        initLocationCurrent();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    if (location != null) {
        return (
            <View style={styles.container}>
                <MapView

                    style={styles.map}
                    region={{
                        latitude: location.coords.latitude,
                        longitude: location.coords.longitude,
                        latitudeDelta: 0.015,
                        longitudeDelta: 0.0121,
                    }}
                >


                    <Circle
                        center={{
                            latitude: location.coords.latitude,
                            longitude: location.coords.longitude
                        }}
                        radius={270}
                        strokeWidth={2}
                        strokeColor="#3399ff"
                        fillColor="#80bfff"

                    />

                    <Marker
                        coordinate={{
                            latitude: location.coords.latitude,
                            longitude: location.coords.longitude
                        }}
                    />
                </MapView>
            </View>

        )
    }
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