import { FieldText } from "../../atoms"

export const Title = ({ children, ...props }) => {
    return (
    <FieldText {...props}> {children}</FieldText>
    )
}
