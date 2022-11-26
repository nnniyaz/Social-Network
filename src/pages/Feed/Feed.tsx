import React, {Suspense} from "react";
import CreatePost from 'components/UI/CreatePost/CreatePost';
import Posts from 'components/UI/Posts/Posts';
import classes from './Feed.module.scss';
import {IPost} from "../../models/IPost";
import {Await, defer, useLoaderData} from "react-router-dom";
import {observer} from "mobx-react-lite";
import posts from "../../store/posts";
import Loader from "../../components/UI/Loader/Loader";

const Feed = observer(() => {
    const {posts} = useLoaderData() as { posts: IPost[] };
    return (
        <div className={classes.main}>
            <div className={classes.main__feed}>
                <CreatePost/>

                <Suspense fallback={<Loader/>}>
                    <Await resolve={posts}>
                        <Posts/>
                    </Await>
                </Suspense>
            </div>
        </div>
    );
});

const getAllPosts = async () => {
    const res = posts.allPosts;
    if (!res.length) {
        const secondRes = await posts.fetchAllPosts();
        return secondRes ? secondRes : [] as IPost[];
    }
    return res;
}

const FeedLoader = async () => {
    return defer({
        posts: getAllPosts(),
    })
}

export {Feed, FeedLoader};