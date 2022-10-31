import styled from 'styled-components/native'


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

export const Card = ({ item, size }) => {
    return (
        <CardContainer size={size ? sizes[size] : sizes.small}>
            <CardImage source={{ uri: item.image_url }} />
        </CardContainer>
    )
}


const CardContainer = styled.View`
  width: ${({ theme, size }) => theme.metrics.px(size.w)}px;
  height: ${({ theme, size }) => theme.metrics.px(size.h)}px;
  border-radius: ${({ theme }) => theme.metrics.px(10)}px;
  overflow: hidden;
  margin-right: ${({ theme }) => theme.metrics.px(12)}px;
`

const CardImage = styled.ImageBackground`
  width: 100%;
  height: 100%;
`