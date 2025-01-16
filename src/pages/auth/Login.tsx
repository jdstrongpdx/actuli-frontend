import React from "react";
import { useMsal } from "@azure/msal-react";
import { InteractionType, InteractionRequiredAuthError } from "@azure/msal-browser";

const Login = () => {
    const { instance, accounts } = useMsal();

    const handleLogin = () => {
        instance.loginPopup({
            scopes: ["User.Read"], // Permission scope (from Azure AD)
        })
            .then((response) => {
                console.log("Login successful:", response);
            })
            .catch((error) => {
                console.error("Login error:", error);
            });
    };

    const getAccessToken = async () => {
        try {
            const tokenResponse = await instance.acquireTokenSilent({
                scopes: ["User.Read"],
                account: accounts[0],
            });
            console.log("Access Token:", tokenResponse.accessToken);
        } catch (error) {
            if (error instanceof InteractionRequiredAuthError) {
                instance.acquireTokenPopup({
                    scopes: ["User.Read"],
                }).then((tokenResponse) => {
                    console.log("Access Token:", tokenResponse.accessToken);
                }).catch(console.error);
            } else {
                console.error(error);
            }
        }
    };

    return (
        <div>
            <button onClick={handleLogin}>Login</button>
            <button onClick={getAccessToken}>Fetch Token</button>
        </div>
    );
};

export default Login;