import { MainButton } from "../../globalComponents/buttons/MainButton"
import { FormContainer } from "../../globalComponents/formContainer/FormContainer"
import { HeaderMenu } from "../../globalComponents/header/HeaderMenu"
import { MainInput } from "../../globalComponents/inputs/MainInput"
import { Title1 } from "../../globalComponents/titles/Title1"
import { SignUpContainer } from "./SignUp.styled"
import {axiosRequest} from "../../requests/request"
import { useNavigate } from "react-router-dom"
import { useForm } from "react-hook-form"
import { schemaRegister } from "../../schemas/schema"
import { yupResolver } from "@hookform/resolvers/yup";
import { ErrorText } from "../../globalComponents/errorText/ErrorText"
import { Link } from "react-router-dom"

export const SignUp = () => {
    const {register, handleSubmit, formState} = useForm({resolver: yupResolver(schemaRegister)})
    const navigate = useNavigate()
    const postSignUp = (data) => {
        axiosRequest.post("/users", data)
        .then((res) => {
            navigate("/")
        })
        .catch((err) =>{
            console.log(err)

        })

    }


    
    return (
       <SignUpContainer>
        <HeaderMenu/>
        <FormContainer onSubmit={handleSubmit(postSignUp)}>
            <Title1>Cadastrar</Title1>
            <MainInput placeholder="Digite seu Nome" {...register("name")}/>
            <ErrorText>{formState.errors.name?.message}</ErrorText>
            <MainInput type="email" placeholder="Digite seu Email" {...register("email")}/>
            <ErrorText>{formState.errors.email?.message}</ErrorText>
            <MainInput placeholder="Digite seu Telefone" {...register("phone")}/>
            <ErrorText>{formState.errors.phone?.message}</ErrorText>
            <MainInput type="password" placeholder="Digite sua Senha" {...register("password")}/>
            <ErrorText>{formState.errors.password?.message}</ErrorText>
            <MainButton>Cadastrar</MainButton>
            <p>Já possui cadastro? <strong><Link to="/">Entrar</Link></strong></p>
        </FormContainer>
        </SignUpContainer>
           )

}