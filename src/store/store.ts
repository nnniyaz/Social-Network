import {IUser} from "../models/IUser";
import {makeAutoObservable} from "mobx";
import AuthService from "../services/AuthService";
import axios from "axios";
import {AuthResponse} from "../models/response/AuthResponse";
import {API_URL} from "../http";
import {IPost} from "../models/IPost";
import PostService from "../services/PostService";

export default class Store {
    user = {} as IUser;
    isAuth = false;
    isLoading = false;

    posts = [] as IPost[];
    userPosts = [] as IPost[];

    constructor() {
        makeAutoObservable(this);
    }

    // ----------------- AUTH -----------------

    setAuth(bool: boolean) {
        this.isAuth = bool;
    }

    setUser(user: IUser) {
        this.user = user;
    }

    setLoading(bool: boolean) {
        this.isLoading = bool;
    }

    async login(email: string, password: string) {
        try {
            const response = await AuthService.login(email, password);
            localStorage.setItem('token', response.data.accessToken);
            this.setAuth(true);
            this.setUser(response.data.user);
        } catch (e) {
            // @ts-ignore
            console.log(e.response?.data?.message);
        }
    }

    async registration(firstName: string, lastName: string, email: string, password: string, country: string, city: string) {
        try {
            const response = await AuthService.registration(firstName, lastName, email, password, country, city);
            localStorage.setItem('token', response.data.accessToken);
            this.setAuth(true);
            this.setUser(response.data.user);
        } catch (e) {
            // @ts-ignore
            console.log(e.response?.data?.message);
        }
    }

    async logout() {
        try {
            const response = await AuthService.logout();
            localStorage.removeItem('token');
            this.setAuth(false);
            this.setUser({} as IUser);
        } catch (e) {
            // @ts-ignore
            console.log(e.response?.data?.message);
        }
    }

    async checkAuth() {
        this.setLoading(true);
        try {
            const response = await axios.get<AuthResponse>(`${API_URL}/refresh`, {withCredentials: true});
            localStorage.setItem('token', response.data.accessToken);
            this.setAuth(true);
            this.setUser(response.data.user);
        } catch (e) {
            // @ts-ignore
            console.log(e.response?.data?.message);
        } finally {
            this.setLoading(false);
        }
    }

    // ----------------- POSTS -----------------

    setPosts(posts: IPost[]) {
        this.posts = posts;
    }

    setUserPosts(posts: IPost[]) {
        this.userPosts = posts;
    }

    async createPost({userId, text}: { userId: string, text: string }) {
        try {
            const response = await PostService.createPost({userId, text});
            this.setPosts([...this.posts, response.data]);
            this.setUserPosts([...this.userPosts, response.data]);
        } catch (e) {
            // @ts-ignore
            console.log(e.response?.data?.message);
        }
    }

    async editPost({postId, text}: { postId: string, text: string }) {
        try {
            const response = await PostService.editPost({postId, text});
            this.setPosts(this.posts.map(p => p._id === response.data._id ? response.data : p));
            this.setUserPosts(this.userPosts.map(p => p._id === response.data._id ? response.data : p));
        } catch (e) {
            // @ts-ignore
            console.log(e.response?.data?.message);
        }
    }

    async deletePost(id: string) {
        try {
            const response = await PostService.deletePost(id);
            this.setPosts(this.posts.filter(p => p._id !== id));
            this.setUserPosts(this.userPosts.filter(p => p._id !== id));
        } catch (e) {
            // @ts-ignore
            console.log(e.response?.data?.message);
        }
    }

    async fetchUserPosts(userId: string) {
        try {
            const response = await PostService.fetchUserPosts(userId);
            this.setUserPosts(response.data);
        } catch (e) {
            // @ts-ignore
            console.log(e.response?.data?.message);
        }
    }

    async fetchAllPosts() {
        try {
            const response = await PostService.fetchAllPosts();
            this.setPosts(response.data);
        } catch (e) {
            // @ts-ignore
            console.log(e.response?.data?.message);
        }
    }
}