import {AxiosResponse} from "axios";
import $api from "../http";
import {IUser} from "../models/IUser";
import {AuthResponse} from "../models/response/AuthResponse";

export default class UserService {
    static async fetchUsers(): Promise<AxiosResponse<IUser[]>> {
        return $api.get<IUser[]>('/users');
    }

    static async updateUserInfo(userId: string, firstName: string, lastName: string, country: string, city: string): Promise<AxiosResponse<AuthResponse>> {
        return $api.put<AuthResponse>('/update-user-info', {userId, firstName, lastName, country, city});
    }

    static async updateUserEmail(userId: string, email: string): Promise<AxiosResponse<AuthResponse>> {
        return $api.put<AuthResponse>('/update-user-email', {userId, email});
    }

    static async updateUserPassword(userId: string, currentPassword: string, newPassword: string): Promise<AxiosResponse<AuthResponse>> {
        return $api.put<AuthResponse>('/update-user-password', {userId, currentPassword, newPassword});
    }
}