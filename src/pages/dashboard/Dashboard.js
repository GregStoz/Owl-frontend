import { Card } from "../../globalComponents/contactCard/Card"
import { HeaderMenu } from "../../globalComponents/header/HeaderMenu"
import { DashboardContainer } from "./Dashboard.styled"
import { Menu } from "../../globalComponents/menu/Menu"
import { axiosRequest } from "../../requests/request"
import { useState } from "react"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

export const Dashboard = () => {
    const navigate = useNavigate()
    const [contacts, setContacts] = useState([])
    const token = localStorage.getItem("TOKEN@OWL")
    const getAllContacts = () => {
        
        
        if(token) {
            axiosRequest.defaults.headers.authorization = `Bearer ${token}`
            axiosRequest.get("/contacts")
            .then((res) => {
                setContacts(res.data)
            })
            .catch((err) =>{
                console.log(err)
            })

        }
    }

    useEffect(() => {
        if(!token){
            navigate("/")
        }
        getAllContacts()
    },)
    
    return (
        <DashboardContainer>
            <HeaderMenu><Menu/></HeaderMenu>
           {contacts.length > 0 ?
           contacts.map((contact) => { 
            return <Card key={contact.id} id={contact.id} name={contact.name}  
                    email={contact.email} phone={contact.phone} 
                    createdAt={contact.createdAt} 
                    updatedAt={contact.updatedAt}/> }) 
                    : <p>Nenhum contato cadastrado.</p>}
        </DashboardContainer>
        )

}