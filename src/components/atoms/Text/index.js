import React from "react";
import styled from "styled-components/native";

export const Text = ({children, ...props}) =>{
    return <CustomText {...props}>{children}</CustomText>
}
const CustomText = styled.Text`
    flex-gow: 1;
    margin-top: ${({ theme, marginTop }) => theme.metrics.px(marginTop || 0)}px;
    margin-left: ${({ theme, marginLeft }) => theme.metrics.px(marginLeft || 0)}px;
    font-size: ${({theme, size}) => theme.metrics.px( size || 24)}px;
    color: ${({ color, theme }) => theme.colors[color || 'red']};
    font-family: ${({ theme, fontFamily }) =>
    theme.fonts[fontFamily || 'regular']};

`