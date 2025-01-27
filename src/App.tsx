import { Route, Routes} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { MsalProvider } from "@azure/msal-react";
import { PublicClientApplication } from "@azure/msal-browser";

// Navigation and Pages
import HomePage from "./pages/HomePage.tsx";
import NotFound from "./pages/NotFound.tsx";
import ProfileView from "./components/profile/ProfileView.tsx";
import ProfileEdit from "./components/profile/ProfileEdit.tsx";
import { PageLayout } from "./components/PageLayout.tsx";
import AuthContent from "./components/auth/AuthContent.tsx";

/**
 * msal-react is built on the React context API and all parts of your app that require authentication must be
 * wrapped in the MsalProvider component. You will first need to initialize an instance of PublicClientApplication
 * then pass this to MsalProvider as a prop. All components underneath MsalProvider will have access to the
 * PublicClientApplication instance via context as well as all hooks and components provided by msal-react. For more, visit:
 * https://github.com/AzureAD/microsoft-authentication-library-for-js/blob/dev/lib/msal-react/docs/getting-started.md
 */

const Pages = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />

            <Route path="/authContent" element={<AuthContent />}/>
            <Route path="/profile" element={<ProfileView />}/>
            <Route path="/profileEdit" element={<ProfileEdit />}/>

            {/* Fallback Route */}
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
};

/**
 * msal-react is built on the React context API and all parts of your app that require authentication must be
 * wrapped in the MsalProvider component. You will first need to initialize an instance of PublicClientApplication
 * then pass this to MsalProvider as a prop. All components underneath MsalProvider will have access to the
 * PublicClientApplication instance via context as well as all hooks and components provided by msal-react. For more, visit:
 * https://github.com/AzureAD/microsoft-authentication-library-for-js/blob/dev/lib/msal-react/docs/getting-started.md
 */
const App: React.FC<{ instance: PublicClientApplication; }> = ({ instance }) => {
    return (
        <MsalProvider instance={instance}>
            <PageLayout>
                <Pages />
            </PageLayout>
        </MsalProvider>
    );
};

export default App;