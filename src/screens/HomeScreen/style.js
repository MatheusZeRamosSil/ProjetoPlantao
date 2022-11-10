import styled from 'styled-components/native'

export const ButtonsView = styled.View`
  display: flex;
  width: 100%;
  margin-top: ${({ theme }) => theme.metrics.px(12)}px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`

export const ButtomItemView = styled.View`
  flex: 1;
  flex-direction: column;
  align-items: ${({ align }) => align || 'center'};
`