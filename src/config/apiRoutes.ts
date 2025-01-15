const API_URL: string = import.meta.env.VITE_API_URL || '';
const BASE_URL: string = import.meta.env.VITE_BASE_URL || '';

interface ApiRoutes {
    BASE: string,
    AUTH: string;
    BUSINESSES: string;
    HOMES: string;
    PRODUCTS: string;
    USER: string;
    USERS: string;
    SUPPORT: string;
    TYPES: string;
    STATES: string;
    ACTUATOR: string;
    COMPANIES: string;
    LOCATION: string;
    SOCIALS: string;
    RESET: string;
    ADMIN_RESET: string;
    FORGOT_USERNAME: string;
}

const apiRoutes: ApiRoutes = {
    BASE: `${BASE_URL}`,
    AUTH: `${API_URL}/auth`,
    BUSINESSES: `${API_URL}/businesses`,
    HOMES: `${API_URL}/homes`,
    PRODUCTS: `${API_URL}/products`,
    USER: `${API_URL}/user`,
    USERS: `${API_URL}/users`,
    SUPPORT: `${API_URL}/support`,
    TYPES: `${API_URL}/types`,
    STATES: `${API_URL}/states`,
    ACTUATOR: `${API_URL}/actuator`,
    COMPANIES: `${API_URL}/companies`,
    LOCATION: "https://geocode.maps.co/search?q=",
    SOCIALS: `${API_URL}/socials`,
    RESET: `${API_URL}/auth/reset`,
    ADMIN_RESET: `${API_URL}/auth/admin-reset`,
    FORGOT_USERNAME: `${API_URL}/auth/forgot`,
}

export default apiRoutes;