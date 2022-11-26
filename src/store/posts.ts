import {makeAutoObservable} from "mobx";
import {IPost} from "../models/IPost";
import PostService from "../services/PostService";

class Posts {
    allPosts = [] as IPost[];
    userPosts = [] as IPost[];

    constructor() {
        makeAutoObservable(this);
    }

    setAllPosts(posts: IPost[]) {
        this.allPosts = posts;
    }

    setUserPosts(posts: IPost[]) {
        this.userPosts = posts;
    }

    async createPost(userId: string, text: string) {
        try {
            const response = await PostService.createPost({userId, text});
            await this.fetchAllPosts();
            await this.fetchUserPosts(response.data.user);
            return response.data;
        } catch (e) {
            // @ts-ignore
            console.log(e.response?.data?.message);
        }
    }

    async editPost(postId: string, text: string) {
        try {
            const response = await PostService.editPost({postId, text});
            await this.fetchAllPosts();
            await this.fetchUserPosts(response.data.user);
            return response.data;
        } catch (e) {
            // @ts-ignore
            console.log(e.response?.data?.message);
        }
    }

    async deletePost(id: string) {
        try {
            const response = await PostService.deletePost(id);
            await this.fetchAllPosts();
            await this.fetchUserPosts(response.data.user);
            return response.data;
        } catch (e) {
            // @ts-ignore
            console.log(e.response?.data?.message);
        }
    }

    async fetchAllPosts() {
        try {
            const response = await PostService.fetchAllPosts();
            this.setAllPosts(response.data);
            return response.data;
        } catch (e) {
            // @ts-ignore
            console.log(e.response?.data?.message);
        }
    }

    async fetchUserPosts(userId: string) {
        try {
            const response = await PostService.fetchUserPosts(userId);
            this.setUserPosts(response.data);
            return response.data;
        } catch (e) {
            // @ts-ignore
            console.log(e.response?.data?.message);
        }
    }
}

export default new Posts();