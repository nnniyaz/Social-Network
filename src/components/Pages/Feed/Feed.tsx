import Posts from 'components/UI/Posts/Posts';
import { PostInterface } from 'context';
import { useMemo } from 'react';
import { useState } from 'react';
import PostComponent from '../../UI/Post/PostComponent';
import SearchBar from '../../UI/SearchBar/SearchBar';
import classes from './Feed.module.scss';

const Feed = () => {
    const [posts, setPosts] = useState<PostInterface[]>([
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
            username: 'Азамат Нурпейсов',
            nickname: 'pablo',
            time: '21:59',
            date: 'October 14, 2022',
            paragraph: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates quam praesentium sit beatae totam nemo odit quibusdam alias eaque tempore molestias voluptatem repellat est at reiciendis, eveniet delectus. Distinctio, illum.',
            color: 'white'
        },
        {
            id: 3,
            username: 'Ахат Мусабаев',
            nickname: 'improved',
            time: '21:59',
            date: 'October 14, 2022',
            paragraph: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates quam praesentium sit beatae totam nemo odit quibusdam alias eaque tempore molestias voluptatem repellat est at reiciendis, eveniet delectus. Distinctio, illum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates quam praesentium sit beatae totam nemo odit quibusdam alias eaque tempore molestias voluptatem repellat est at reiciendis, eveniet delectus. Distinctio, illum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates quam praesentium sit beatae totam nemo odit quibusdam alias eaque tempore molestias voluptatem repellat est at reiciendis, eveniet delectus. Distinctio, illum.',
            color: 'orange'
        },
        {
            id: 4,
            username: 'Нурсултан Абен',
            nickname: 'aben',
            time: '21:59',
            date: 'October 14, 2022',
            paragraph: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates quam praesentium sit beatae totam nemo odit quibusdam alias eaque tempore molestias voluptatem repellat est at reiciendis, eveniet delectus. Distinctio, illum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates quam praesentium sit beatae totam nemo odit quibusdam alias eaque tempore molestias voluptatem repellat est at reiciendis, eveniet delectus. Distinctio, illum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates quam praesentium sit beatae totam nemo odit quibusdam alias eaque tempore molestias voluptatem repellat est at reiciendis, eveniet delectus. Distinctio, illum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates quam praesentium sit beatae totam nemo odit quibusdam alias eaque tempore molestias voluptatem repellat est at reiciendis, eveniet delectus. Distinctio, illum.',
            color: 'blue'
        },
    ]);
    const [searchQuery, setSearchQuery] = useState('');
    const [text, setText] = useState('');

    const searchedPosts = useMemo(() => {
        return [...posts].filter(post => post.username.toLowerCase().includes(searchQuery.toLowerCase()) || post.nickname.toLowerCase().includes(searchQuery.toLowerCase()));
    }, [searchQuery, posts]);

    const createdPost = () => {
        if (text === '') {
            return;
        }

        const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        const time = `${new Date().getHours()} : ${new Date().getMinutes()}`;
        const date = `${months[new Date().getMonth()]} ${new Date().getDate()}, ${new Date().getFullYear()}`;
        const colors = ['black', 'white', 'orange', 'blue', 'red', 'green', 'purple', 'yellow'];

        const newPost: PostInterface = {
            id: posts.length + 1,
            username: 'Нияз Насыров',
            nickname: '@nnniyaz',
            time: time,
            date: date,
            paragraph: text,
            color: colors[Math.floor(Math.random() * colors.length)]
        }

        setPosts([newPost, ...posts]);
        setText('');
    }

    return (
        <div className={classes.main}>
            <div className={classes.main__feed}>
                <div className={classes.main__feed__header}>
                    <SearchBar
                        value={searchQuery}
                        onChange={(e: any) => setSearchQuery(e.target.value)}
                    />

                    <div className={classes.create__block}>
                        <textarea
                            value={text}
                            onChange={(e: any) => setText(e.target.value)}
                            className={classes.create__block__textarea}
                            placeholder={'New post...'}
                        />
                        <div className={classes.button}>
                            <button className={classes.create__block__btn} onClick={() => createdPost()}>Create post</button>
                        </div>
                    </div>
                </div>

                <Posts
                    searchedPosts={searchedPosts}
                />
            </div>
        </div>
    );
}

export default Feed;