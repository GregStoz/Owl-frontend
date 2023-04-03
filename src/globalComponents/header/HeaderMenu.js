
import { HeaderContainer } from "./HeaderMenu.styled"



export const HeaderMenu = ({children}) => {
    
    return (<HeaderContainer><div className="logo"><span>OWL</span></div>
   
            {children}
            </HeaderContainer>)
}