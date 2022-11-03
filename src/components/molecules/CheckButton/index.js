import styled from 'styled-components/native';
import { Texto } from '../../atoms'


export const CheckButton = () => {
    return (
      <PlayContainer>
        <Texto fontFamily='regular' size={16}>Finalizar turno</Texto>
      </PlayContainer>
    )
}

const PlayContainer = styled.TouchableOpacity`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.gray};
  border-radius: ${({ theme }) => theme.metrics.px(23)}px;
  height: ${({ theme }) => theme.metrics.px(48)}px;
  width: ${({ theme }) => theme.metrics.px(238)};
`