import {Set} from "./database";
import {getUserTimestamp, updateUserStatus} from "./api"
import {json} from "react-router-dom";
import {isLoginBlocked} from "./IsLoginBlocked";


const authenticate = async (name, password, auth) => {
    const params = new URLSearchParams();
    params.append("name", name);
    params.append("password", password);
    params.append("appAuth", auth.toLowerCase());

    try {
        const response = await fetch("https://www.worldwar0x.io/play/php/bl_Login.php", {
            method: "POST", body: params, headers: {"Content-Type": "application/x-www-form-urlencoded"},
        });

        if (response.status === 401) {
            return {status: response.status, result: null};
        }

        const data = await response.text();
        const parsedData = parseResponse(data);

        if (!parsedData) return {status: -1, result: null};

        const result = await getUserTimestamp({name: parsedData.name, type: "1"});

        if (!result) {
            Set(null);
            return {status: -1, result: null};
        }

        if (isLoginBlocked(result)) {
            Set(null);
            return {status: 1000, result: null};
        }

        Set(parsedData);
        return {status: response.status, result: parsedData};

    } catch (error) {
        console.error("Authentication Error:", error);
        return {status: -1, result: null};
    }
};

const parseResponse = (data) => {
    const lines = data.split("\n");

    if (lines[0].trim() !== "success") {
        return null; // If not successful, return null or handle as needed
    }

    const result = {};

    lines.slice(1).forEach((line) => {
        const [key, value] = line.split("|");

        if (key && value) {
            result[key.trim()] = value.trim();
        }
    });

    if (result.meta) {
        try {
            result.meta = JSON.parse(result.meta);
        } catch (error) {
            console.error("Failed to parse 'meta' JSON:", error);
            return null;
        }
    }

    return result;
};

// Example usage:
// const response = '{"result": "2025-01-30T14:30:00.000Z"}';
// console.log(isLoginBlocked(response));


export default authenticate;
