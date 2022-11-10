import styled from 'styled-components/native';
import { FieldText } from '../../atoms'


export const CheckButton = () => {
    return (
      <PlayContainer>
        <FieldText fontFamily='regular' size={14} color='white'>Make checking</FieldText>
      </PlayContainer>
    )
}

const PlayContainer = styled.TouchableOpacity`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.gray};
  border-radius: ${({ theme }) => theme.metrics.px(6)}px;
  height: ${({ theme }) => theme.metrics.px(63)}px;
  width: ${({ theme }) => theme.metrics.px(333)};
`