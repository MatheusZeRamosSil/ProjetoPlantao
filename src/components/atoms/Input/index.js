import styled from 'styled-components/native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import React from 'react'
import { Container } from '../Container';
import { FieldText } from '../FieldText';
import { theme } from "../../../styles";

export const Input = ({
  marginTop,
  password,
  error,
  placeholder,
  ...props
}) => {

  const [hidePassword, setHidePassword] = React.useState(password);

  return (
    <Container>
      <InputContainer {...props} marginTop={marginTop} >
        <TextInput {...props}
        placeholder={placeholder}
        secureTextEntry={hidePassword}

        />
        {password && (
          <Icon
            onPress={() => setHidePassword(!hidePassword)}
            name={hidePassword ? 'eye-outline' : 'eye-off-outline'}
            size={theme.metrics.px(24)}
            color={theme.colors.ocean}
          />
        )}
      </InputContainer>

      {error && (<FieldText
        marginTop={8}
        fontFamily="regular"
        color="red"
        size={12}>{error}</FieldText>)}
    </Container>

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
  margin-top: ${({ theme, marginTop }) => theme.metrics.px(marginTop || 0)}px;
  margin-bottom: ${({ theme, marginBottom }) => theme.metrics.px(marginBottom || 0)}px;
  margin-left: ${({ theme, marginLeft }) => theme.metrics.px(marginLeft || 0)}px;
  margin-right: ${({ theme, marginRight }) => theme.metrics.px(marginRight || 0)}px;
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