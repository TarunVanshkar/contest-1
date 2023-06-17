import React, { useState } from "react";
import Signup from "./Components/Signup";
import Input from "./Components/Input";
import Button from "./Components/Button";

const App = () => {

    let [name, setName] = useState(null);
    let [email, setEmail] = useState(null);
    let [password, setPassword] = useState(null);
    let [confirmPassword, setConfirmPassword] = useState(null);
    let [errorMessage, setErrorMessage] = useState(null);
    let [successMessage, setSuccessMessage] = useState(null);

    function handleSubmit(event) {
        event.preventDefault();
        if (!name || !email || !password || !confirmPassword) {
            setSuccessMessage("");
            setErrorMessage("Error : All the fields are mandatory")
        }
        else if (password !== confirmPassword) {
            setSuccessMessage("");
            setErrorMessage("Error : Password does not match")
        }
        else {
            // console.log(name)
            // console.log(email)
            // console.log(password)
            // console.log(confirmPassword)

            // To vanish the each input field after successfully signing up
            setErrorMessage("")
            setTimeout(() => {
                event.target[0].value = "";
                event.target[1].value = "";
                event.target[2].value = "";
                event.target[3].value = "";
            }, 500);

            setSuccessMessage("Successfully Signed Up!");
        }
    }


    return (
        <div className="form-container">
            <form onSubmit={handleSubmit}>
                <Signup />
                <Input type={"text"} placeValue={"Full Name"} setInputValue={(event) => { setName(event.target.value) }} />
                <Input type={"email"} placeValue={"Email"} setInputValue={(event) => { setEmail(event.target.value) }} />
                <Input type={"password"} placeValue={"Password"} setInputValue={(event) => { setPassword(event.target.value) }} />
                <Input type={"password"} placeValue={"Confirm Password"} setInputValue={(event) => { setConfirmPassword(event.target.value) }} />
                <p className="error-message">{errorMessage}</p>
                <p className="success-message">{successMessage}</p>
                <Button type="submit" />
            </form>

        </div>
    )
}

export default App;