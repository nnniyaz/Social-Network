export interface IUser {
    id: string;
    isActivated: boolean;
    email: string;
    roles: string[];
    firstName: string;
    lastName: string;
    country: string;
    city: string;
    createdAt: string;
}