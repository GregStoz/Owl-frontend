import { MainButton } from "../../globalComponents/buttons/MainButton"
import { FormContainer } from "../../globalComponents/formContainer/FormContainer"
import { HeaderMenu } from "../../globalComponents/header/HeaderMenu"
import { MainInput } from "../../globalComponents/inputs/MainInput"
import { Menu } from "../../globalComponents/menu/Menu"
import { Title1 } from "../../globalComponents/titles/Title1"
import { EditContactContainer } from "./EditContact.styled"
import {axiosRequest} from "../../requests/request"
import { useNavigate } from "react-router-dom"
import { useForm } from "react-hook-form"
import { schemaUpdateContact } from "../../schemas/schema"
import { yupResolver } from "@hookform/resolvers/yup";
import { ErrorText } from "../../globalComponents/errorText/ErrorText"
import { useParams } from "react-router-dom"
import { sanitizeObject } from "../../helper"
import { useEffect } from "react"

export const EditContact = () => {
    const { contactId } = useParams()
    const token = localStorage.getItem("TOKEN@OWL")
    const {register, handleSubmit, formState} = useForm({resolver: yupResolver(schemaUpdateContact)})
    const navigate = useNavigate()
    const patchContact = (data) => {
        
        axiosRequest.defaults.headers.authorization = `Bearer ${token}`
        axiosRequest.patch(`/contacts/${contactId}`, sanitizeObject(data))
        .then((res) => {
            navigate("/dashboard")
        })
        .catch((err) =>{
            console.log(err)

        })

    }

    useEffect(() => {
        if(!token){
            navigate("/")
        }
        
    },)

    return (
       <EditContactContainer>
        <HeaderMenu><Menu/></HeaderMenu>
        <FormContainer onSubmit={handleSubmit(patchContact)}>
            <Title1>Editar Perfil</Title1>
            <MainInput placeholder="Digite o Nome do Contato" {...register("name")}/>
            <ErrorText>{formState.errors.name?.message}</ErrorText>
            <MainInput type="email" placeholder="Digite o Email do Contato" {...register("email")}/>
            <ErrorText>{formState.errors.email?.message}</ErrorText>
            <MainInput placeholder="Digite o Telefone do Contato" {...register("phone")}/>
            <ErrorText>{formState.errors.phone?.message}</ErrorText>
            <MainButton>Salvar</MainButton>
            
        
            <p>Caso não queira atualizar algum campo, deixe em branco</p>
            
        </FormContainer>
        </EditContactContainer>
           )

}