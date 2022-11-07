import styled from 'styled-components/native'
import { Texto, FieldText } from '../../atoms'

export const Tag = ({ children, ...props }) => {
  return (
    <TagContainer {...props}>
      <FieldText fontFamily="regular" size={14} color='white'>
        {children}
      </FieldText>
    </TagContainer>

  )
}

const TagContainer = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ color, theme }) => theme.colors[color || 'ocean']};
  height: ${({ theme }) => theme.metrics.px(18)}px;
  border-radius: ${({ theme }) => theme.metrics.px(60)}px;
  width: ${({ theme }) => theme.metrics.px(88)}px;
  margin-top: ${({ theme, marginTop }) => theme.metrics.px(marginTop || 0)}px;
  margin-left: ${({ theme, marginLeft }) => theme.metrics.px(marginLeft || 0)}px;
`