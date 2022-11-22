import { FieldText } from "../../atoms"

export const Title = ({ children, ...props }) => {
    return (
    <FieldText   
        fontFamily="lato_bold"
        color="ocean"
        size={32}> 
            {children}</FieldText>
    )
}
