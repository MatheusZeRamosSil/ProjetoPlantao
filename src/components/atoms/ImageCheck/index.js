import check from '../../../../assets/check.png'
import styled from 'styled-components/native'


const sizes = {
    small: 28,
    large: 48,
}

export const ImageCheck = ({ size }) => {
    return < IconStyle source={check} size={sizes[size || 'large']} />
}

export const IconStyle = styled.Image`
    height: ${({ size, theme }) => theme.metrics.px(size)}px;
    width: ${({ size, theme }) => theme.metrics.px(size)}px;
`