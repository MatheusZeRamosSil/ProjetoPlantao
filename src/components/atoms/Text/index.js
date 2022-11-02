import React from "react";
import styled from "styled-components/native";

export const Texto = ({children, ...props}) =>{
    return <CustomText {...props}>{children}</CustomText>
}
const CustomText = styled.Text`
    margin-top: ${({ theme, marginTop }) => theme.metrics.px(marginTop || 0)}px;
    margin-left: ${({ theme, marginLeft }) => theme.metrics.px(marginLeft || 0)}px;
    font-size: ${({theme, size}) => theme.metrics.px( size || 24)}px;
    color: ${({ color, theme }) => theme.colors[color || 'black']};
    font-family: ${({ theme, fontFamily }) => theme.fonts[fontFamily || 'regular']};
`