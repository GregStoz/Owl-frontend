import { FormContainerWrapper } from "./FormContainer.styled"

export const FormContainer = ({children, ...props}) => {
    return (<FormContainerWrapper {...props}>{children}
            </FormContainerWrapper>)
}