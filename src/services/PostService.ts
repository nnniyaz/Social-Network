import {AxiosResponse} from "axios";
import $api from "../http";
import {IPost} from "../models/IPost";

export default class PostService {
    static async createPost({userId, text}:{userId:string, text: string}): Promise<AxiosResponse<IPost>> {
        return $api.post<IPost>('/create-post', {userId, text});
    }

    static async editPost({postId, text}: {postId: string, text: string}): Promise<AxiosResponse<IPost>> {
        return $api.post<IPost>('/edit-post', {postId, text});
    }

    static async deletePost(id: string): Promise<AxiosResponse<IPost>> {
        return $api.post<IPost>(`/delete-post`, {postId: id});
    }

    static async fetchUserPosts(id: string): Promise<AxiosResponse<IPost[]>> {
        return $api.get<IPost[]>(`/get-user-posts/${id}`);
    }

    static async fetchAllPosts(): Promise<AxiosResponse<IPost[]>> {
        return $api.get<IPost[]>('/get-all-posts');
    }
}