import React, {Suspense} from "react";
import {useContext} from 'react';
import classes from './Profile.module.scss';
import CreatePost from 'components/UI/CreatePost/CreatePost';
import {Context} from "../../index";
import ProfileBlock from "../../components/UI/ProfileBlock/ProfileBlock";
import Posts from "../../components/UI/Posts/Posts";
import {IPost} from "../../models/IPost";
import posts from "../../store/posts";
import {defer, Await, useLoaderData} from "react-router-dom";
import Loader from "../../components/UI/Loader/Loader";

const Profile = () => {
    const {store} = useContext(Context);
    const {posts} = useLoaderData() as { posts: IPost[] };

    return (
        <div className={classes.main}>
            <div className={classes.main__container}>
                <ProfileBlock user={store.user}/>

                <CreatePost/>

                <Suspense fallback={<Loader/>}>
                    <Await resolve={posts}>
                        <Posts/>
                    </Await>
                </Suspense>
            </div>
        </div>
    );
}

const getUserPosts = async (userId: string) => {
    const res = posts.userPosts;
    if (!res.length) {
        const secondRes = await posts.fetchUserPosts(userId);
        return secondRes ? secondRes : [] as IPost[];
    }
    return res;
}

const ProfileLoader = async ({params}: { params: any }) => {
    return defer({
        posts: getUserPosts(params.id),
    })
}

export {Profile, ProfileLoader};