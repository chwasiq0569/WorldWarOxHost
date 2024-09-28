import {Set} from "./database";
import {updateUserStatus} from "./api"


const authenticate = async (name, password, auth) => {

    // Create URLSearchParams object to encode form data
    const params = new URLSearchParams();
    params.append("name", name);
    params.append("password", password);
    params.append("appAuth", auth.toLowerCase());

    try {
        const response = await fetch("https://www.worldwar0x.io/play/php/bl_Login.php", {
            method: "POST", body: params, headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
        });


        if (response.status === 401) {
            return {status: response.status, result: null};
        }

        const data = await response.text(); // Read the response as plain text
        const parsedData = parseResponse(data);

        if (parsedData) {
            const result = await updateUserStatus({name: parsedData.name, status: "1", type: "2"});

            if (result) {
                Set(parsedData);
                return {status: response.status, result: parsedData};
            }else{
                Set(null);
                return {status: -1, result: null};
            }
        }

    } catch (error) {
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


export default authenticate;
