import logo from "../assets/bybit.jpg"
import { useState } from "react"
function Content(){
    return(
        <div className="flex h-56 border justify-start items-center">
            <img src={logo} alt="logo" className="w-full h-56"/>
        </div>
    )
}
export default Content