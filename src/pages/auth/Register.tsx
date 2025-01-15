import { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";

const PasswordErrorMessage = () => {
    return (
        <Alert variant="danger" className="mt-2">
            Password should have at least 8 characters
        </Alert>
    );
};

const Register = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState({
        value: "",
        isTouched: false,
    });
    const [role, setRole] = useState("role");

    const getIsFormValid = () => {
        return (
            firstName &&
            email &&
            password.value.length >= 8 &&
            role !== "role"
        );
    };

    const clearForm = () => {
        setFirstName("");
        setLastName("");
        setEmail("");
        setPassword({
            value: "",
            isTouched: false,
        });
        setRole("role");
    };

    const handleSubmit = (e: { preventDefault: () => void }) => {
        e.preventDefault();
        alert("Account created!");
        clearForm();
    };

    return (
        <div className="App">
            <Form onSubmit={handleSubmit}>
                <fieldset>
                    <h2>Sign Up</h2>
                    <Form.Group className="mb-3" controlId="formFirstName">
                        <Form.Label>
                            First name <sup>*</sup>
                        </Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="First name"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formLastName">
                        <Form.Label>Last name</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Last name"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formEmail">
                        <Form.Label>
                            Email address <sup>*</sup>
                        </Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="Email address"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formPassword">
                        <Form.Label>
                            Password <sup>*</sup>
                        </Form.Label>
                        <Form.Control
                            type="password"
                            value={password.value}
                            placeholder="Password"
                            onChange={(e) =>
                                setPassword({ ...password, value: e.target.value })
                            }
                            onBlur={() =>
                                setPassword({ ...password, isTouched: true })
                            }
                        />
                        {password.isTouched && password.value.length < 8 && (
                            <PasswordErrorMessage />
                        )}
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formRole">
                        <Form.Label>
                            Role <sup>*</sup>
                        </Form.Label>
                        <Form.Select
                            value={role}
                            onChange={(e) => setRole(e.target.value)}
                        >
                            <option value="role">Role</option>
                            <option value="individual">Individual</option>
                            <option value="business">Business</option>
                        </Form.Select>
                    </Form.Group>
                    <Button
                        type="submit"
                        variant="primary"
                        disabled={!getIsFormValid()}
                    >
                        Create account
                    </Button>
                </fieldset>
            </Form>
        </div>
    );
};

export default Register;