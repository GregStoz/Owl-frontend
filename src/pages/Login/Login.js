import { MainButton } from "../../globalComponents/buttons/MainButton"
import { FormContainer } from "../../globalComponents/formContainer/FormContainer"
import { HeaderMenu } from "../../globalComponents/header/HeaderMenu"
import { MainInput } from "../../globalComponents/inputs/MainInput"
import { Title1 } from "../../globalComponents/titles/Title1"
import { LoginContainer } from "./Login.styled"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import { useForm } from "react-hook-form"
import { schemaLogin } from "../../schemas/schema"
import { yupResolver } from "@hookform/resolvers/yup";
import { ErrorText } from "../../globalComponents/errorText/ErrorText"
import {axiosRequest} from "../../requests/request"




export const Login = () => {
    const {register, handleSubmit, formState} = useForm({resolver: yupResolver(schemaLogin)})
    const navigate = useNavigate()
    const postLogin = (data) => {
        axiosRequest.post("/login", data)
        .then((res) => {
          const { token, userId } = res.data;
          localStorage.setItem("TOKEN@OWL", token)
          localStorage.setItem("CURRENT_ID@OWL", userId)
         
          navigate("/dashboard")
        })
        .catch((err) =>{
            console.log(err)

        })

    }

     return (
       <LoginContainer>
        <HeaderMenu></HeaderMenu>
        <FormContainer onSubmit={handleSubmit(postLogin)}>
            <Title1>Login</Title1>
            <MainInput placeholder="Digite seu Email" {...register("email")}/>
            <ErrorText>{formState.errors.email?.message}</ErrorText>
            <MainInput type="password" placeholder="Digite sua Senha" {...register("password")}/>
            <ErrorText>{formState.errors.password?.message}</ErrorText>
            
            <MainButton>Entrar</MainButton>
        </FormContainer>
        <p>Não possui cadastro? <strong><Link to="/signup">Cadastre-se</Link></strong></p>
        </LoginContainer>
           )

}