import CreatePost from 'components/UI/CreatePost/CreatePost';
import Posts from 'components/UI/Posts/Posts';
import {useContext, useEffect, useMemo} from 'react';
import {useState} from 'react';
import SearchBar from '../../components/UI/SearchBar/SearchBar';
import classes from './Feed.module.scss';
import {IPost} from "../../models/IPost";
import {Context} from "../../index";

const Feed = () => {
    const {store} = useContext(Context);
    const [posts, setPosts] = useState<IPost[]>([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [text, setText] = useState('');

    const [trigger, setTrigger] = useState(false);

    const searchedPosts: IPost[] = useMemo(() => {
        return [...posts].filter(post => post.userName.toLowerCase().includes(searchQuery.toLowerCase()));
    }, [searchQuery, posts]);

    const createdPost = () => {
        if (text === '') {
            return;
        }

        const newPost = {
            userId: store.user.id,
            text: text,
        };

        store.createPost(newPost).then(data => {
            store.setPosts(store.posts);
            setTrigger(!trigger);
        });

        setText('');
    }

    useEffect(() => {
        store.fetchAllPosts().then(() => {
            setPosts(store.posts);
        });
    }, [trigger]);

    return (
        <div className={classes.main}>
            <div className={classes.main__feed}>
                <SearchBar
                    value={searchQuery}
                    onChange={(e: any) => setSearchQuery(e.target.value)}
                />

                <CreatePost text={text} setText={setText} createdPost={createdPost}/>

                <Posts
                    searchedPosts={searchedPosts}
                />
            </div>
        </div>
    );
}

export default Feed;