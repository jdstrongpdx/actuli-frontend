import { Configuration } from "@azure/msal-browser";

export const msalConfig: Configuration = {
    auth: {
        clientId: import.meta.env.VITE_CLIENT_ID, // Client ID from environment variables
        authority: `https://login.microsoftonline.com/${import.meta.env.VITE_TENANT_ID}`, // Tenant ID
        redirectUri: import.meta.env.VITE_REDIRECT_URI, // Redirect URI
    },
    cache: {
        cacheLocation: "localStorage",
        storeAuthStateInCookie: false,
    },
};