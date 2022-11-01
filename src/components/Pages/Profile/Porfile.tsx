import { useMemo, useState } from 'react';
import classes from './Profile.module.scss';
import { PostInterface, UserInterface } from 'context';
import SearchBar from 'components/UI/SearchBar/SearchBar';
import PostComponent from 'components/UI/Post/PostComponent';
import CreatePost from 'components/UI/CreatePost/CreatePost';
import Posts from 'components/UI/Posts/Posts';
import { Link } from 'react-router-dom';

const Profile = () => {
    const [user, setUser] = useState<UserInterface>(
        {
            id: 0,
            firstName: 'Нияз',
            lastName: 'Насыров',
            email: 'niyaz@gmail.com',
            createdAt: 'October 29, 2022',
            country: 'Kazakhstan',
            city: 'Almaty',
            nickname: 'nnniyaz',
            color: 'black',
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
            color: 'black'
        },
        {
            id: 2,
            username: 'Нияз Насыров',
            nickname: 'nnniyaz',
            time: '17:36',
            date: 'October 13, 2022',
            paragraph: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates quam praesentium sit beatae totam nemo odit quibusdam alias eaque tempore molestias voluptatem repellat est at reiciendis, eveniet delectus.',
            color: 'black'
        },
        {
            id: 3,
            username: 'Нияз Насыров',
            nickname: 'nnniyaz',
            time: '19:12',
            date: 'October 12, 2022',
            paragraph: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates quam praesentium sit beatae totam nemo odit quibusdam alias eaque tempore molestias voluptatem repellat est at reiciendis, eveniet delectus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates quam praesentium sit beatae totam nemo odit quibusdam alias eaque tempore molestias voluptatem repellat est at reiciendis, eveniet delectus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates quam praesentium sit beatae totam nemo odit quibusdam alias eaque tempore molestias voluptatem repellat est at reiciendis, eveniet delectus.',
            color: 'black'
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
            nickname: user.nickname,
            time: time,
            date: date,
            paragraph: text,
            color: user.color
        }

        setUserPosts([newPost, ...userPosts]);
        setText('');
    }

    return (
        <div className={classes.main}>
            <div className={classes.main__container}>
                <div className={classes.profile__block}>
                    <div className={classes.profile__background} style={{ backgroundColor: `${user.color}` }}></div>
                    <div className={classes.profile__block__info}>
                        <div className={classes.profile__block__info__avatar} style={{ backgroundColor: `${user.color}` }}></div>
                        <Link to={'edit'} className={classes.edit} state={user}>
                            <div className={classes.edit__text}>Edit</div>
                            <div className={classes.edit__icon}>
                                <svg height="17" viewBox="0 0 48 48" width="17" xmlns="http://www.w3.org/2000/svg" fill='white'><path d="M6 34.5v7.5h7.5l22.13-22.13-7.5-7.5-22.13 22.13zm35.41-20.41c.78-.78.78-2.05 0-2.83l-4.67-4.67c-.78-.78-2.05-.78-2.83 0l-3.66 3.66 7.5 7.5 3.66-3.66z" /><path d="M0 0h48v48h-48z" fill="none" /></svg>
                            </div>
                        </Link>
                        <div className={classes.profile__block__info__main}>
                            <div className={classes.name}>{`${user.firstName} ${user.lastName}`}</div>
                            <div className={classes.nickname}>{`@${user.nickname}`}</div>
                            <div className={classes.bio}>
                                <div className={classes.registration__date}>{`In system from: ${user.createdAt}`}</div>
                                <div className={classes.location}>{`${user.country}, ${user.city}`}</div>
                            </div>
                        </div>
                    </div>
                </div>

                <SearchBar
                    value={searchQuery}
                    onChange={(e: any) => setSearchQuery(e.target.value)}
                />

                <CreatePost
                    text={text}
                    setText={setText}
                    createdPost={createdPost}
                />

                <Posts searchedPosts={searchedPosts} />
            </div>
        </div>
    );
}

export default Profile;