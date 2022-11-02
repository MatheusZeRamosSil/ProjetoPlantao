import styled from 'styled-components/native'
import { Texto } from '../../atoms'

export const Tag = ({ children, ...props }) => {
    return (
        <TagContainer {...props}>
        <Texto fontFamily="regular" size={14} color='white'>
          {children}
        </Texto>
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
  margin: ${({ theme, margin }) => theme.metrics.px(margin || 0)}px;
`