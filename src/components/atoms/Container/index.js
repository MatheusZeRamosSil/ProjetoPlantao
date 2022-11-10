import styled from 'styled-components/native'


  export const Container = styled.View`
  display: flex;
  flex-direction: ${({ dir }) => dir || 'column'};
  align-items: ${({ align }) => align || 'flex-start'};
  justify-content: ${({ justify }) => justify || 'flex-start'};
  margin-top: ${({ theme, marginTop }) => theme.metrics.px(marginTop || 0)}px;
  margin-left: ${({ theme, marginLeft }) => theme.metrics.px(marginLeft || 0)}px;
  margin-right: ${({ theme, marginRight }) => theme.metrics.px(marginRight || 0)}px;
  margin-bottom: ${({ theme, marginBottom }) => theme.metrics.px(marginBottom || 0)}px;
  background-color: ${({ color, theme }) => theme.colors[color || 'black']};
  padding: ${({ theme, padding }) => theme.metrics.px(padding || 0)}px;
  border-radius:  ${({ theme, border }) => theme.metrics.px(border || 0)}px;
  `