import React from "react";

const Input = ({type, placeValue, setInputValue}) => {

    return(
        <input type={type} placeholder={placeValue} onChange={setInputValue}/>
    )
}

export default Input;