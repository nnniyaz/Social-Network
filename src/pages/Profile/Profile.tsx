import {useContext, useMemo, useState} from 'react';
import classes from './Profile.module.scss';
import {PostInterface} from 'context';
import SearchBar from 'components/UI/SearchBar/SearchBar';
import CreatePost from 'components/UI/CreatePost/CreatePost';
import Posts from 'components/UI/Posts/Posts';
import {Link} from 'react-router-dom';
import {Context} from "../../index";
import {IUser} from "../../models/IUser";
import {formatDate} from "../../utils/profileUtil";
import ProfileBlock from "../../components/UI/ProfileBlock/ProfileBlock";

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
    const [userPosts, setUserPosts] = useState<PostInterface[]>([
        {
            id: 1,
            username: 'Нияз Насыров',
            nickname: 'nnniyaz',
            time: '21:59',
            date: 'October 14, 2022',
            paragraph: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates quam praesentium sit beatae totam nemo odit quibusdam alias eaque tempore molestias voluptatem repellat est at reiciendis, eveniet delectus. Distinctio, illum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates quam praesentium sit beatae totam nemo odit quibusdam alias eaque tempore molestias voluptatem repellat est at reiciendis, eveniet delectus. Distinctio, illum.',
        },
        {
            id: 2,
            username: 'Нияз Насыров',
            nickname: 'nnniyaz',
            time: '17:36',
            date: 'October 13, 2022',
            paragraph: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates quam praesentium sit beatae totam nemo odit quibusdam alias eaque tempore molestias voluptatem repellat est at reiciendis, eveniet delectus.',
        },
        {
            id: 3,
            username: 'Нияз Насыров',
            nickname: 'nnniyaz',
            time: '19:12',
            date: 'October 12, 2022',
            paragraph: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates quam praesentium sit beatae totam nemo odit quibusdam alias eaque tempore molestias voluptatem repellat est at reiciendis, eveniet delectus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates quam praesentium sit beatae totam nemo odit quibusdam alias eaque tempore molestias voluptatem repellat est at reiciendis, eveniet delectus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates quam praesentium sit beatae totam nemo odit quibusdam alias eaque tempore molestias voluptatem repellat est at reiciendis, eveniet delectus.',
        },
    ]);

    const searchedPosts = useMemo(() => {
        return [...userPosts].filter(post => post.username.toLowerCase().includes(searchQuery.toLowerCase()) || post.nickname.toLowerCase().includes(searchQuery.toLowerCase()) || post.paragraph.toLowerCase().includes(searchQuery.toLowerCase()));
    }, [searchQuery, userPosts]);

    const createdPost = () => {
        if (text === '') {
            return;
        }
        const currentDate = new Date();
        const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        const time = `${currentDate.getHours() < 10 ? '0' + currentDate.getHours() : currentDate.getHours()}:${currentDate.getMinutes() < 10 ? '0' + currentDate.getMinutes() : currentDate.getMinutes()}`;
        const date = `${months[currentDate.getMonth()]} ${currentDate.getDate()}, ${currentDate.getFullYear()}`;

        const newPost: PostInterface = {
            id: userPosts.length + 1,
            username: user.firstName + ' ' + user.lastName,
            nickname: user.email,
            time: time,
            date: date,
            paragraph: text,
        }

        setUserPosts([newPost, ...userPosts]);
        setText('');
    }

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