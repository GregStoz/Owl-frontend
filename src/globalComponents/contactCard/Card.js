import { MainButton } from "../buttons/MainButton";
import { CardContainer } from "./Card.styled";
import { useNavigate } from "react-router-dom";
import { axiosRequest } from "../../requests/request"

export const Card = ({id, name, email, phone, createdAt, updatedAt}) => {
    const token = localStorage.getItem("TOKEN@OWL")
    const navigate = useNavigate()

    
    const getContact = (id) =>{
        
        navigate(`/edit-contact/${id}`)

    }

    const deleteContact = (id) => {
        if(token) {
            axiosRequest.delete(`/contacts/${id}`)
            .then((res) =>{
                navigate("/dashboard")
            })
            .catch((err) => {
                console.log(err)
            })
        }
    }

   
   

    return (
        <CardContainer>
            <div className="card-title"><span>{name}</span></div>
            <ul>
                <li>Telefone: {phone}</li>
                <li>Email: {email}</li>
                <li>Cadastrado em: {createdAt}</li>
                <li>Última atualização: {updatedAt}</li>
            </ul>
            <div className="button-area">
                <MainButton onClick={() => {getContact(id)}}>Editar</MainButton>
                <MainButton onClick={() => {deleteContact(id)}}>Deletar</MainButton>
            </div>
        </CardContainer>
    )
}