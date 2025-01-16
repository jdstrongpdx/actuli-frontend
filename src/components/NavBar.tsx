import {Container, Nav, Navbar} from 'react-bootstrap';
import {useEffect, useState} from "react";
import {useLocation} from "react-router-dom";
const NavBar = () => {
    const currentUser = useState<boolean>(true);
    const location = useLocation();
    const [activeKey, setActiveKey] = useState(location.pathname);

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
                                <Nav.Item>
                                    <Nav.Link href="/profile" eventKey="profile">Profile</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link href="/goals" eventKey="goals">Goals</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link href="/achievements" eventKey="achievements">Achievements</Nav.Link>
                                </Nav.Item>
                            </Nav>

                            {/* Right-aligned content */}
                            <Nav className="ms-auto custom-navbar-nav">
                                {currentUser ? (
                                    <Nav.Item>
                                        <Nav.Link href="/logout" eventKey="/logout">Logout</Nav.Link>
                                    </Nav.Item>
                                ) : (
                                    <Nav.Item>
                                        <Nav.Link href="/login" eventKey="/login">Login</Nav.Link>
                                    </Nav.Item>
                                )}
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </header>
        </>
    );
};

export default NavBar;