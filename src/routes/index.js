import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Login } from '../screens/Login';
import { RegisterProfile } from '../screens/Register/RegisterProfile';
import { RegisterEmail } from '../screens/Register/RegisterEmail';

export const Routes = () => {
    const Stack = createNativeStackNavigator();

    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown: false}}>
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="RegisterProfile" component={RegisterProfile} />
                <Stack.Screen name="RegisterEmail" component={RegisterEmail} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}