import {Col, Container, Row} from "react-bootstrap";

const Footer = () => {


    return (
        <>
            <footer className="pt-2 bg-light-subtle text-center">
                <Container>
                    <Row>
                        <Col>
                            <Col className="text-center">
                                <a href="/about" className="footer-link">About</a>
                                <span className="mx-3">|</span>
                                <a href="/help" className="footer-link">Help</a>
                                <span className="mx-3">|</span>
                                <a href="/privacy" className="footer-link">Privacy</a>
                                <span className="mx-3">|</span>
                                <a href="/terms" className="footer-link">Terms and Conditions</a>
                                {/* Add more links as needed */}
                            </Col>

                            <Row className="justify-content-center">&copy; Actuli.com {new Date().getFullYear()}</Row>
                        </Col>
                    </Row>
                </Container>
            </footer>
        </>
    )
}

export default Footer;