import {AxiosResponse} from "axios";
import {AuthResponse} from "../models/response/AuthResponse";
import $api from "../http";
import {IUser} from "../models/IUser";

export default class UserService {
    static async fetchUsers(): Promise<AxiosResponse<IUser[]>> {
        return $api.get<IUser[]>('/users');
    }
}