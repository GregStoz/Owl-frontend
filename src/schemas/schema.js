import * as yup from "yup";


export const schemaLogin = yup.object().shape({
    email: yup.string().required("Insira um email").email("Ensira um email válido"),
    password: yup
        .string()
        .required("Insira uma senha"),
});

export const schemaRegister = yup.object().shape({
    name: yup.string().required("Insira seu Nome"),
    email: yup.string().required("Insira um email").email("Insira um email válido"),
    phone: yup.string().required("Insira seu Telefone").max(11),
    password: yup
        .string()
        .required("Insira uma senha")
        ,
});
export const schemaUpdate = yup.object().shape({
    name: yup.string().notRequired(),
    email: yup.string().notRequired().email("Insira um email válido"),
    phone: yup.string().notRequired(),
})

export const schemaContact = yup.object().shape({
    name: yup.string().required("Insira um nome"),
    email: yup.string().required("Insira um email").email("Insira um email válido"),
    phone: yup.string().required("Insira um telefone").max(11),
    
})

export const schemaUpdateContact = yup.object().shape({
    email: yup.string().notRequired().email("Insira um email válido"),
    name: yup.string().notRequired(),
    phone: yup.string().notRequired().max(11),
    
})