import { Profile, FieldText } from "../../atoms"
import { View } from "react-native"
import { Avatar } from "@rneui/themed";
import { Container } from "../../atoms";

export const InfoPreceptor = ({ infoPreceptor, size }) => {

    const { image_url, name, graduacao } = infoPreceptor
    return (
        <View>
                <Container dir='row'
                    align='center'
                    marginLeft={26}
                    marginTop={12}
                    marginRight={26}
                    border={6}
                    padding={12}
                    color='light_gray'>
                    <Profile
                        item={{ 
                            size:size,
                            url_image: image_url }} />

                    <Container >
                        <FieldText fontFamily="regular"
                            size={14}
                            color='dark'
                            marginLeft={12} >{name}</FieldText>

                        <FieldText fontFamily="regular"
                            marginLeft={12}
                            marginTop={4}
                            size={12}
                            color='gray'>{graduacao}</FieldText>
                    </Container>

                </Container>
        </View>



    )
}