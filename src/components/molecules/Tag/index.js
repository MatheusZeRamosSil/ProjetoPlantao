import styled from 'styled-components/native';
import {Text} from '../../atoms/Text';

export const Tag = ({children, ...props}) => (
    <TagContainer {...props}>
        <Text size={14} color='white'>{children}</Text>
    </TagContainer>
)


const TagContainer = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.ocean};
  height: ${({ theme }) => theme.metrics.px(24)}px;
  border-radius: ${({ theme }) => theme.metrics.px(24)}px;
  max-width: ${({ theme }) => theme.metrics.px(80)}px;
  margin-top: ${({ theme, mt }) => theme.metrics.px(mt || 0)}px;
  margin-bottom: ${({ theme, mb }) => theme.metrics.px(mb || 0)}px;
  margin-left: ${({ theme, ml }) => theme.metrics.px(ml || 0)}px;
  margin-right: ${({ theme, mr }) => theme.metrics.px(mr || 0)}px;
`