import { MainInputContainer } from "./inputs.styled"
import { forwardRef } from "react"
export const MainInput = forwardRef((props, ref) => {
    return (<MainInputContainer {...props} ref={ref}/>)
})