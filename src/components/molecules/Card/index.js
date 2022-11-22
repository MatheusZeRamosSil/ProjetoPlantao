import styled from 'styled-components/native'
import plantaoIcon from '../../../../assets/plantaoIcon.png'
import { ImageCheck } from '../../atoms'

const sizes = {
    small: {
        h: 80,
        w: 93,
    },
    large: {
        h: 150,
        w: 102,
    },
}

export const Card = ({ color,props, size }) => {
    return (
        <CardContainer size={size ? sizes[size] : sizes.small}
                        color={color}
        >
            <ImageCheck/>
            <CardImage source={plantaoIcon} />
        </CardContainer>
    )
}


const CardContainer = styled.View`
  width: ${({ theme, size }) => theme.metrics.px(size.w)}px;
  height: ${({ theme, size }) => theme.metrics.px(size.h)}px;
  border-radius: ${({ theme }) => theme.metrics.px(10)}px;
  background-color: ${({ color, theme }) => theme.colors[color || 'gray']};
  overflow: hidden;
  margin-right: ${({ theme }) => theme.metrics.px(12)}px;
`

const CardImage = styled.ImageBackground`
  width: 100%;
  height: 100%;
`