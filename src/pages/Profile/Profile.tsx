import {useContext, useEffect, useMemo, useState} from 'react';
import classes from './Profile.module.scss';
import SearchBar from 'components/UI/SearchBar/SearchBar';
import CreatePost from 'components/UI/CreatePost/CreatePost';
import {Context} from "../../index";
import {IUser} from "../../models/IUser";
import ProfileBlock from "../../components/UI/ProfileBlock/ProfileBlock";
import Posts from "../../components/UI/Posts/Posts";
import {IPost} from "../../models/IPost";

const Profile = () => {
    const {store} = useContext(Context);
    const [user, setUser] = useState<IUser>(
        {
            id: store.user.id,
            isActivated: store.user.isActivated,
            email: store.user.email,
            roles: store.user.roles,
            firstName: store.user.firstName,
            lastName: store.user.lastName,
            country: store.user.country,
            city: store.user.city,
            createdAt: store.user.createdAt,
        }
    );
    const [searchQuery, setSearchQuery] = useState<string>('');
    const [text, setText] = useState<string>('');
    const [userPosts, setUserPosts] = useState<IPost[]>([]);

    const [trigger, setTrigger] = useState(false);

    const searchedPosts = useMemo(() => {
        return [...userPosts].filter(post => post.userName.toLowerCase().includes(searchQuery.toLowerCase()));
    }, [searchQuery, userPosts]);

    const createdPost = () => {
        if (text === '') {
            return;
        }

        const newPost = {
            userId: store.user.id,
            text: text,
        };

        store.createPost(newPost).then(data => {
            store.setUserPosts(store.userPosts);
            setTrigger(!trigger);
        });

        setText('');
    }

    useEffect(() => {
        store.fetchUserPosts(store.user.id).then(() => {
            setUserPosts(store.userPosts);
        });
    }, [trigger]);

    return (
        <div className={classes.main}>
            <div className={classes.main__container}>
                <ProfileBlock user={user}/>

                <SearchBar
                    value={searchQuery}
                    onChange={(e: any) => setSearchQuery(e.target.value)}
                />

                <CreatePost
                    text={text}
                    setText={setText}
                    createdPost={createdPost}
                />

                <Posts searchedPosts={searchedPosts}/>
            </div>
        </div>
    );
}

export default Profile;