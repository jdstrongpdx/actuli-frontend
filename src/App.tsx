import {BrowserRouter, Route, Routes} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { MsalProvider } from "@azure/msal-react";

// Navigation and Pages
import HomePage from "./components/HomePage.tsx";
import NotFound from "./components/NotFound.tsx";
import ProfileView from "./components/profile/ProfileView.tsx";
import ProfileEdit from "./components/profile/ProfileEdit.tsx";
import { PageLayout } from "./components/PageLayout.tsx";
import AuthContent from "./components/auth/AuthContent.tsx";
import WeatherForecast from "./components/WeatherForecast.tsx";
import ProtectedRoute from "./components/auth/ProtectedRoute.tsx";

/**
 * msal-react is built on the React context API and all parts of your app that require authentication must be
 * wrapped in the MsalProvider component. You will first need to initialize an instance of PublicClientApplication
 * then pass this to MsalProvider as a prop. All components underneath MsalProvider will have access to the
 * PublicClientApplication instance via context as well as all hooks and components provided by msal-react. For more, visit:
 * https://github.com/AzureAD/microsoft-authentication-library-for-js/blob/dev/lib/msal-react/docs/getting-started.md
 */
const App = ({instance}) => {

    return (
        <MsalProvider instance={instance}>
            <BrowserRouter>
                    <PageLayout>
                        <Routes>
                            {/* Public Routes */}
                            <Route path="/" element={<HomePage />} />

                            {/* Protected Routes */}
                            <Route
                                path="/authContent"
                                element={
                                    <ProtectedRoute>
                                        <AuthContent />
                                    </ProtectedRoute>
                                }
                            />

                            <Route
                                path="/profile"
                                element={
                                    <ProtectedRoute>
                                        <ProfileView />
                                    </ProtectedRoute>
                                }
                            />
                            <Route
                                path="/profileEdit"
                                element={
                                    <ProtectedRoute>
                                        <ProfileEdit />
                                    </ProtectedRoute>
                                }
                            />
                            <Route
                                path="/weather"
                                element={
                                    <ProtectedRoute>
                                        <WeatherForecast />
                                    </ProtectedRoute>
                                }
                            />

                            {/* Fallback Route */}
                            <Route path="*" element={<NotFound />} />
                        </Routes>
                    </PageLayout>
            </BrowserRouter>
        </MsalProvider>
    );
};

export default App;