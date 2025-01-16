import {Button, Container, Nav, Navbar} from 'react-bootstrap';
import {useEffect, useState} from "react";
import {useLocation} from "react-router-dom";
import {AuthenticatedTemplate, UnauthenticatedTemplate, useMsal} from "@azure/msal-react";
import {loginRequest} from "../config/authConfig.ts";


const NavBar = () => {
    const location = useLocation();
    const [activeKey, setActiveKey] = useState(location.pathname);
    const { instance } = useMsal();

    const handleLoginRedirect = () => {
        instance.loginRedirect(loginRequest).catch((error) => console.log(error));
    };

    const handleLogoutRedirect = () => {
        instance.logoutRedirect().catch((error) => console.log(error));
    };

    useEffect(() => {
        const pathname = location.pathname;
        const pathParts = pathname.split('/');
        setActiveKey(pathParts[1]);
    }, [location]);

    return (
        <>
            <header>
                <Navbar collapseOnSelect expand="sm" bg="light" className="custom-navbar">
                    <Container>
                        {/* Navbar.Toggle for small screens */}
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />

                        {/* Navbar Brand inside collapser */}
                        <Navbar.Brand href="/" className="custom-navbar-brand me-3">
                            <img
                                alt="Logo"
                                src="/apple-touch-icon.png"
                                width="45"
                                height="45"
                                className="d-inline-block rounded-2 align-middle"
                            />{' '}
                            Actuli
                        </Navbar.Brand>

                        {/* Navbar Collapser */}
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav variant="underline" activeKey={activeKey} className="me-auto">
                                <Nav.Item>
                                    <Nav.Link href="/" eventKey="">Home</Nav.Link>
                                </Nav.Item>
                                <AuthenticatedTemplate>
                                    <Nav.Item>
                                        <Nav.Link href="/profile" eventKey="profile">Profile</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link href="/goals" eventKey="goals">Goals</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link href="/achievements" eventKey="achievements">Achievements</Nav.Link>
                                    </Nav.Item>
                                </ AuthenticatedTemplate>
                            </Nav>

                            {/* Right-aligned content */}
                            <Nav className="ms-auto custom-navbar-nav">
                                <AuthenticatedTemplate>
                                    <Nav.Item>
                                        <Nav.Link href="/authContent" eventKey="authContent">Auth Data</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link href="/weather" eventKey="weather">Weather</Nav.Link>
                                    </Nav.Item>
                                    <Button variant="warning" onClick={handleLogoutRedirect}>
                                        Sign out
                                    </Button>
                                </AuthenticatedTemplate>
                                <UnauthenticatedTemplate>
                                        <Button onClick={handleLoginRedirect}>Sign in</Button>
                                </UnauthenticatedTemplate>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </header>
        </>
    );
};

export default NavBar;