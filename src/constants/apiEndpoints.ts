export const ApiEndpoints = {
    LOGIN: '/api/auth/login',
    REGISTER: '/api/auth/register',
    GET_USER: '/api/users/:id',
    UPDATE_USER: '/api/users/update',
    DELETE_USER: '/api/users/delete',
} as const;