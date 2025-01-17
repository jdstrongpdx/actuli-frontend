import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { PublicClientApplication, EventType } from '@azure/msal-browser';

import { msalConfig } from './authConfig.js';
import App from './App';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

/**
 * MSAL should be instantiated outside of the component tree to prevent it from being re-instantiated on re-renders.
 * For more, visit: https://github.com/AzureAD/microsoft-authentication-library-for-js/blob/dev/lib/msal-react/docs/getting-started.md
 */

const initializeMsal = async () => {
    const msalInstance = new PublicClientApplication(msalConfig);

    // Wait for MSAL instance to initialize before proceeding
    await msalInstance.initialize();
    await msalInstance.handleRedirectPromise();

    // Default to the first account if none is active
    if (!msalInstance.getActiveAccount() && msalInstance.getAllAccounts().length > 0) {
        msalInstance.setActiveAccount(msalInstance.getAllAccounts()[0]);
    }

    return msalInstance;
};

// Wait for MSAL to initialize before rendering React App
initializeMsal().then((msalInstance) => {
    const root = ReactDOM.createRoot(document.getElementById("root"));

    root.render(
        <BrowserRouter>
            <App instance={msalInstance} />
        </BrowserRouter>
    );
}).catch((error) => {
    console.error("Failed to initialize MSAL instance:", error);
});
