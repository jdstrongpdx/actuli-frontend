export default interface IUser {
    id: number | null;
    email: string;
    username: string;
    roles: string[];
    isActive: boolean;
    createdAt: Date;
    updatedAt: Date;
    profile: IUserProfile;
    data: IUserData;
    preferences: {
        language: string;
        theme: string;
        notifications: {
            email: boolean;
            sms: boolean;
            push: boolean;
        };
    };
}

export interface IUserProfile {
    firstName: string;
    lastName: string;
    avatar: string;
    bio: string;
    mobileNumber: string;
    website: string;
    dateOfBirth: Date;
    address: {
        address1: string;
        address2: string;
        city: string;
        state: string;
        postalCode: string;
        country: string;
    };
}

export interface IUserData {
    education: Record<string, unknown>;
    work: Record<string, unknown>;
    relationships: Record<string, unknown>;
    religion: Record<string, unknown>;
    housing: Record<string, unknown>;
    hobby: Record<string, unknown>;
    health: Record<string, unknown>;
    giving: Record<string, unknown>;
    fiances: Record<string, unknown>;
    identity: Record<string, unknown>;
}