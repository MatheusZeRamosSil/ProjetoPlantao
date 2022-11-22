import styled from 'styled-components/native';
import { FieldText } from '../../atoms'


export const CheckButton = ({enableButton,onPress}) => {
    return (
      <PlayContainer disabled={enableButton} onPress = {onPress}>
        <FieldText fontFamily='regular' size={14} color='white'>Fazer checking</FieldText>
      </PlayContainer>
    )
}

const PlayContainer = styled.TouchableOpacity`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.ocean};
  border-radius: ${({ theme }) => theme.metrics.px(6)}px;
  height: ${({ theme }) => theme.metrics.px(63)}px;
  width: ${({ theme }) => theme.metrics.px(333)};
`