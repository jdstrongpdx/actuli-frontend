import React from "react";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import {Col, Container, Row} from 'react-bootstrap';

import NavBar from "./pages/NavBar.tsx";
import Footer from "./pages/Footer.tsx";

import HomePage from "./pages/HomePage.tsx";
import NotFound from "./pages/NotFound.tsx";

import ProfileView from "./pages/profile/ProfileView.tsx";
import ProfileEdit from "./pages/profile/ProfileEdit.tsx";

const App: React.FC = () => {
    // wrap context providers
    return (
        <>
            <BrowserRouter>
                <AppContent />
            </BrowserRouter>
        </>
    )
}

const AppContent: React.FC = () => {
    return (
        <div className="d-flex flex-column min-vh-100">
            <NavBar />
            <Container className="flex-grow-1 my-4">
                <Row>
                    <Col>
                        <Routes>

                            <Route path="/" element={<HomePage />} />
                            <Route path="/profile" element={<ProfileView />} />
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