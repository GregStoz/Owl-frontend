import { useState } from "react";
import { MenuContainer } from "./Menu.styled";
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom";


export const Menu = () => {
    const navigate = useNavigate()
    const [isOpen, setIsOpen] = useState(false)
    
    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

    const logout = () => {
        localStorage.clear()
        navigate("/")
    }

    return (
    <MenuContainer>
        {!isOpen ?
              
        <div>
            <span onClick={toggleMenu}>Abrir Menu</span>
        </div> : <div>
            <span onClick={toggleMenu}>Fechar Menu</span>
            <ul>
                <li><Link to="/dashboard">Início</Link></li>
                <li><Link to="/edit-profile">Gerenciar Perfil</Link></li>
                <li><Link to="/create-contact">Adicionar Contato</Link></li>
                <li onClick={() => {logout()}}>SAIR</li>
            </ul>
        </div>}

    </MenuContainer>
    )
}