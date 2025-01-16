import React from "react";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import {Col, Container, Row} from 'react-bootstrap';
import { useMsal } from "@azure/msal-react";
import { InteractionType, InteractionRequiredAuthError } from "@azure/msal-browser";

// Navigation
import NavBar from "./pages/NavBar.tsx";
import Footer from "./pages/Footer.tsx";

// Auth
import ProtectedRoute from "./pages/auth/ProtectedRoute.tsx";


import HomePage from "./pages/HomePage.tsx";
import NotFound from "./pages/NotFound.tsx";

import ProfileView from "./pages/profile/ProfileView.tsx";
import ProfileEdit from "./pages/profile/ProfileEdit.tsx";

const App: React.FC = () => {
    const { instance, accounts } = useMsal();


    const handleLogin = () => {
        instance
            .loginPopup({
                scopes: ["User.Read"], // Example scope, adjust based on your API permissions
            })
            .then((response) => {
                console.log("Login Response:", response);
            })
            .catch((error) => {
                console.error("Login Error:", error);
            });
    };

    const getAccessToken = async () => {
        try {
            const tokenResponse = await instance.acquireTokenSilent({
                scopes: ["User.Read"], // Match the scope configured in Azure
                account: accounts[0],
            });
            console.log("Access Token:", tokenResponse.accessToken);
        } catch (error) {
            if (error instanceof InteractionRequiredAuthError) {
                instance
                    .acquireTokenPopup({
                        scopes: ["User.Read"],
                    })
                    .then((tokenResponse) => {
                        console.log("Access Token:", tokenResponse.accessToken);
                    })
                    .catch((error) => {
                        console.error("Token Acquisition Error:", error);
                    });
            } else {
                console.error(error);
            }
        }
    };

    const fetchProtectedResource = async () => {
        const tokenResponse = await instance.acquireTokenSilent({
            scopes: ["api.read"],
            account: accounts[0],
        });

        const response = await fetch("http://localhost:5297/weatherforecast", {
            method: "GET",
            headers: {
                Authorization: `Bearer ${tokenResponse.accessToken}`,
            },
        });

        const data = await response.json();
        console.log("Data:", data);
    };


    // wrap context providers
    return (
        <>
            <BrowserRouter>
                <AppContent/>
                <div>
                    <h1>Welcome to React with MSAL Authentication</h1>
                    <button onClick={handleLogin}>Login</button>
                    <button onClick={getAccessToken}>Get Access Token</button>
                    <button onClick={fetchProtectedResource}>Get Protected Resource</button>
                </div>
            </BrowserRouter>
        </>
    )
}

const AppContent: React.FC = () => {
    return (
        <div className="d-flex flex-column min-vh-100">
            <NavBar/>
            <Container className="flex-grow-1 my-4">
                <Row>
                    <Col>
                        <Routes>
                                <Route path="/" element={<HomePage />} />
                                    <Route path="/profile"
                                           element={
                                               <ProtectedRoute>
                                                    <ProfileView />
                                               </ProtectedRoute>
                                    } />
                                    <Route path="/profileEdit" element={<ProfileEdit />} />

                            <Route path="*" element={<NotFound />} />

                        </Routes>
                    </Col>
                </Row>
                <div className="pb-5"></div>
            </Container>
            <Footer />
        </div>

    )
        ;
};

export default App;