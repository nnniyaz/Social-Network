import Post from '../Post/Post';
import classes from './Posts.module.scss';
import {IPost} from "../../../models/IPost";
import React, {useMemo, useState} from "react";
import SearchBar from "../SearchBar/SearchBar";
import {useAsyncValue} from "react-router-dom";

const Posts = () => {
    const posts = useAsyncValue() as IPost[];
    const [searchQuery, setSearchQuery] = useState('');
    const searchedPosts: IPost[] = useMemo(() => {
        if (!searchQuery) return posts;
        return [...posts].filter(
            post =>
                post.userName.toLowerCase().includes(searchQuery.toLowerCase()) ||
                post.user.toLowerCase().includes(searchQuery.toLowerCase()) ||
                post.text.toLowerCase().includes(searchQuery.toLowerCase()) ||
                post.email.toLowerCase().includes(searchQuery.toLowerCase())
        );
    }, [searchQuery, posts]);

    return (
        <>
            <SearchBar
                value={searchQuery}
                onChange={(e: any) => setSearchQuery(e.target.value)}
            />

            <div className={classes.main__feed__body}>
                {
                    searchedPosts.length ? (
                        searchedPosts.map(post => (
                            <Post key={post._id} post={post}/>
                        ))
                    ) : (
                        <div className={classes.main__feed__body__empty}>
                            <div className={classes.main__feed__body__empty__text}>No posts</div>
                        </div>
                    )
                }
            </div>
        </>
    )
}

export default Posts;