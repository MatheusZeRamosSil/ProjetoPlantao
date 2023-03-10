import { ActivityIndicator, View } from "react-native";
import { Container, FieldText } from "../../atoms";
import { ImageIcon } from "../../atoms";
import check from '../../../../assets/check.png';

export const State = ({ props }) => {
    const { clickButtonCheckout, testCheckout } = props

    
    if (testCheckout != false) {
        return (


            <Container align='center'>
                <ImageIcon icon={check}/>
                <FieldText
                    fontFamily="lato_bold"
                    size={16}
                    color='dark'
                    marginTop={8}>Plantão medico</FieldText>
                <FieldText
                    fontFamily="lato_bold"
                    size={16}
                    color='dark'>Iniciado</FieldText>
            </Container>



        )

    }

    if (clickButtonCheckout != false) {
        return (
            <Container align='center' marginTop={8}>
                <ActivityIndicator size="large" color="#0000ff" />
                <FieldText
                    fontFamily="lato_bold"
                    size={16}
                    color='dark'
                    marginTop={8}>Plantão medico</FieldText>
                <FieldText
                    fontFamily="lato_bold"
                    size={16}
                    color='dark'>Iniciando ...</FieldText>
            </Container>

        )
    }

    
}