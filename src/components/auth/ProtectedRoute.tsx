import React from "react";
import { Navigate } from "react-router-dom";
import { useMsal } from "@azure/msal-react";

interface ProtectedRouteProps {
    children: JSX.Element; // React element to be rendered if authenticated
    redirectTo?: string; // Redirection path if the user is unauthenticated
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children, redirectTo = "/" }) => {
    const { instance } = useMsal();
    const activeAccount = instance.getActiveAccount(); // Check if a user is logged in

    if (!activeAccount) {
        console.warn("No active account detected. Redirecting to login page...");
        return <Navigate to={redirectTo} replace />;
    }

    return children;
};

export default ProtectedRoute;