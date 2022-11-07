import { Profile, FieldText } from "../../atoms"
import { View } from "react-native"
import { Avatar } from "@rneui/themed";
import { Container } from "../../atoms";

export const InfoPreceptor = ({ infoPreceptor, size }) => {

    const { image_url, name, graduacao } = infoPreceptor
    return (
        <View>
            <FieldText fontFamily="regular"
                size={16}
                marginLeft={32}
                marginTop={12}>Preceptor</FieldText>
            <Container dir='row' >


                <Container dir='row'
                    align='center'
                    marginLeft={34}
                    marginTop={12}>
                    <Profile
                        item={{ 
                            size:80,
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
            </Container>
        </View>



    )
}