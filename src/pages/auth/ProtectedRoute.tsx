import { Navigate } from "react-router-dom";
import { useIsAuthenticated } from "@azure/msal-react";

const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
    const isAuthenticated = useIsAuthenticated();

    return isAuthenticated ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;