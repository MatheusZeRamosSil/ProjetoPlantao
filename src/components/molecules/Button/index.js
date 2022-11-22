import styled from 'styled-components/native';
import { FieldText } from '../../atoms';

export const Button = ({ children, onPress}) =>{
    return (
        <PlayContainer onPress={onPress} color="orange">
        <FieldText fontFamily='lato_bold' size={12} color='coffe'>{children}</FieldText>
      </PlayContainer>
    )
}

const PlayContainer = styled.TouchableOpacity`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${({ color, theme }) => theme.colors[color || 'black']};;
  border-radius: ${({ theme }) => theme.metrics.px(4)}px;
  height: ${({ theme }) => theme.metrics.px(34)}px;
  width: ${({ theme }) => theme.metrics.px(103)}px;
`
