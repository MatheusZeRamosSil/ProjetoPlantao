import { FieldText } from "../../atoms"

export const Title = ({ children }) => {
    return (
        <FieldText fontFamily="lato_bold" size={24} color='ocean'
        marginLeft={34} marginTop={50}> Boa tarde, {children}</FieldText>
    )
}
