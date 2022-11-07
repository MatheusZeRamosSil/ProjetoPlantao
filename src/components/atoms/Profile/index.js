import { Avatar } from "@rneui/themed";
import { StyleSheet } from "react-native";
import styled from 'styled-components/native'
import { theme } from "../../../styles";
import { Container } from "../Container";



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

export const Profile = ({ item, ...props }) => {
    const { url_image, size, children,specialty } = item
    return (
        <Container {...props}>
            <Avatar
                size={size}
                rounded
                //source={{ uri: url_image }}
                title="D"
                containerStyle={{ backgroundColor: theme.colors.gray }}
            />
        </Container>


    )
}


const SizeProfile = styled.View`
    display: flex;
    flex-direction: ${({ dir }) => dir || 'column'};
    align-items: ${({ align }) => align || 'flex-start'};
    justify-content: ${({ justify }) => justify || 'flex-start'};
    margin-top: ${({ theme, marginTop }) => theme.metrics.px(marginTop || 0)}px;
    margin-left: ${({ theme, marginLeft }) => theme.metrics.px(marginLeft || 0)}px;
    margin-right: ${({ theme, marginRight }) => theme.metrics.px(marginRight || 0)}px;
`

const styles = StyleSheet.create({
    profile: {
        width: 84,
        height: 84,
        alignSelf: 'flex-start',
        marginTop: 12,
        marginLeft: 34,
    }
});
