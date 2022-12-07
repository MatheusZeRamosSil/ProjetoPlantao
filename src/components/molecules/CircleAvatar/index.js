import styled from 'styled-components/native'



export const CircleAvatar = ({icon}) =>{
    return(
        <Circle>
            <AvatarImage source={icon} />
        </Circle>
    )
}

const Circle = styled.View`
    width: ${({ theme }) => theme.metrics.px(150)}px;
    height: ${({ theme }) => theme.metrics.px(150)}px;
    border-radius: ${({ theme }) => theme.metrics.px(150)}px;
    border-width: ${({ theme }) => theme.metrics.px(4)}px;
    border-color: ${({ color, theme }) => theme.colors[color || 'ocean']};
    align-items:center;
    justify-content: center;
`

const AvatarImage = styled.ImageBackground`
  width: 80%;
  height: 82%;
  margin-left: ${({ theme }) => theme.metrics.px(23)}px;
  margin-top: ${({ theme }) => theme.metrics.px(12)}px;
`