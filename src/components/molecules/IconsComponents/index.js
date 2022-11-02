import React from "react";
import Ionicons from '@expo/vector-icons/Ionicons';
import styled from 'styled-components/native';
import { Container, Texto } from "../../atoms";
import { theme } from "../../../styles";
import { View,Text } from "react-native";

export const IconComponent = ({ iconName, label }) => {
    return (

        <Container dir="row" marginRight={8}>
            <Ionicons
                name={iconName}
                size={theme.metrics.px(24)}
                color={theme.colors.orange}
            />
        </Container>
    )
}






