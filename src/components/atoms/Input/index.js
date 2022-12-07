import styled from 'styled-components/native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import React, { useState, useEffect } from 'react'

export const Input = (props, password, iconName) =>{

  const [hidePassword, setHidePassword] = React.useState(password);

    return(
        <InputContainer {...props}>
            <TextInput {...props}
                       
            />
        </InputContainer>
    )
}

const InputContainer = styled.View`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: ${({ dir }) => dir || 'row'};
  width: ${({ theme }) => theme.metrics.px(256)}px;
  height: ${({ theme }) => theme.metrics.px(42)}px;
  border-radius: ${({ theme }) => theme.metrics.px(4)};
  border-width: ${({ theme }) => theme.metrics.px(1)}px;
  border-color: ${({ theme }) => theme.colors.ocean};
  padding: ${({ theme }) => theme.metrics.px(6)}px;
  margin-top: ${({ theme, mt }) => theme.metrics.px(mt || 0)}px;
  margin-bottom: ${({ theme, mb }) => theme.metrics.px(mb || 0)}px;
  margin-left: ${({ theme, ml }) => theme.metrics.px(ml || 0)}px;
  margin-right: ${({ theme, mr }) => theme.metrics.px(mr || 0)}px;
`

const TextInput = styled.TextInput.attrs(({ theme }) => ({
  placeholderTextColor: theme.colors.ocean,
}))`
  height: 100%;
  width: 90%;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.ocean};
  font-size: ${({ theme }) => theme.metrics.px(10)}px;
`