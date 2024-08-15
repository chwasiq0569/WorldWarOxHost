import React, {useContext, useState} from "react";
import updateCoin from "../Function/updateCoins";
import "./GameAuth.css"
import Authenticate from "./Authenticate";
import {useNavigate} from "react-router-dom";
import {Set, Get} from '../Function/Database';


const GameAuth = ({onLoginSuccess}) => {

    const [formData, setFormData] = useState({
        name: "", // Will be filled by user input
        password: "", // Will be filled by user input
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData((prevState) => ({
            ...prevState, [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const {name, password} = formData;
        const result = await Authenticate(name, password, "ulogin");
        CheckResponseCode(result);
    };

    const CheckResponseCode = (response) => {
        switch (response.status) {
            case 401:
                window.alert("Username or password is Incorrect");
                break;
            case 200:
                onLoginSuccess();
                break;
            default:
                window.alert("Something went wrong! Please try again");

        }
    }

    return (<div>
        <form className="login-form" onSubmit={handleSubmit}>
            <input
                type="text"
                name="name"
                placeholder="Username..."
                className="input-field"
                value={formData.name}
                onChange={handleChange}
                required
            />
            <input
                type="password"
                name="password"
                placeholder="Password..."
                className="input-field"
                value={formData.password}
                onChange={handleChange}
                required
            />
            <button type="submit" className="login-submit">
                LOG IN
            </button>
        </form>
    </div>);
};

export default GameAuth;
