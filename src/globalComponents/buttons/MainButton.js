import { MainButtonContainer } from "./MainButton.styled";

export const MainButton = ({children, ...props}) => {
    return (<MainButtonContainer {...props}>{children}</MainButtonContainer>)
}