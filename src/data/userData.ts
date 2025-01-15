import IUser from "../interfaces/IUser.ts";

export let userData: IUser = {
    id: null,

    email: 'johndoe@example.com',
    username: 'johndoe123',
    roles: ['user'],
    isActive: true,
    createdAt: new Date(),
    updatedAt: new Date(),
    profile: {
        firstName: 'John',
        lastName: 'Doe',
        avatar: '/path/to/default-avatar.png',
        bio: 'This is a placeholder bio.',
        mobileNumber: '+1234567890',
        website: 'https://example.com',
        dateOfBirth: new Date(),
        address: {
            address1: '123 Main Street',
            address2: '',
            city: 'Sample City',
            state: 'Sample State',
            postalCode: '12345',
            country: 'Sample Country',
        },
    },
    data: {
        education: {},
        work: {},
        relationships: {},
        religion: {},
        housing: {},
        hobby: {},
        health: {},
        giving: {},
        fiances: {},
        identity: {},
    },
    preferences: {
        language: 'en',
        theme: 'light',
        notifications: {
            email: true,
            sms: false,
            push: true,
        },
    },
};