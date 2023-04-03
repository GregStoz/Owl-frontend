import { MainButton } from "../../globalComponents/buttons/MainButton"
import { FormContainer } from "../../globalComponents/formContainer/FormContainer"
import { HeaderMenu } from "../../globalComponents/header/HeaderMenu"
import { MainInput } from "../../globalComponents/inputs/MainInput"
import { Menu } from "../../globalComponents/menu/Menu"
import { Title1 } from "../../globalComponents/titles/Title1"
import { EditProfileContainer } from "./EditProfile.styled"
import {axiosRequest} from "../../requests/request"
import { useNavigate } from "react-router-dom"
import { useForm } from "react-hook-form"
import { schemaUpdate } from "../../schemas/schema"
import { yupResolver } from "@hookform/resolvers/yup";
import { ErrorText } from "../../globalComponents/errorText/ErrorText"
import { sanitizeObject } from "../../helper"
import { useEffect } from "react"

export const EditProfile = () => {
    const token = localStorage.getItem("TOKEN@OWL")
    const userId = localStorage.getItem("CURRENT_ID@OWL")
    const {register, handleSubmit, formState} = useForm({resolver: yupResolver(schemaUpdate)})
    const navigate = useNavigate()
    const patchProfile = (data) => {
        if(token) {
        axiosRequest.defaults.headers.authorization = `Bearer ${token}`
        axiosRequest.patch(`/users/${userId}`, sanitizeObject(data))
        .then((res) => {
            navigate("/dashboard")
        })
        .catch((err) =>{
            console.log(err)

        })}

    }

    const deleteProfile = () => {
        if(token) {
        axiosRequest.defaults.headers.authorization = `Bearer ${token}`
        axiosRequest.delete(`/users/${userId}`)
        .then((res) => {
            localStorage.clear()
            navigate("/")
        })
        .catch((err) =>{
            console.log(err)

        })

    }}

    useEffect(() => {
        if(!token){
            navigate("/")
        }
        
    },)
    return (
       <EditProfileContainer>
        <HeaderMenu><Menu/></HeaderMenu>
        <FormContainer onSubmit={handleSubmit(patchProfile)}>
            <Title1>Editar Perfil</Title1>
            <MainInput placeholder="Digite seu Nome" {...register("name")}/>
            <ErrorText>{formState.errors.name?.message}</ErrorText>
            <MainInput type="email" placeholder="Digite seu Email" {...register("email")}/>
            <ErrorText>{formState.errors.email?.message}</ErrorText>
            <MainInput placeholder="Digite seu Telefone" {...register("phone")}/>
            <ErrorText>{formState.errors.phone?.message}</ErrorText>
            <MainButton>Salvar</MainButton>
            
        </FormContainer>
            <MainButton onClick={deleteProfile}>Deletar Perfil</MainButton>
            <p>Caso não queira atualizar algum campo, deixe em branco</p>
        </EditProfileContainer>
           )

}