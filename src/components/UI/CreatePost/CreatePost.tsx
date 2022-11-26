import classes from './CreatePost.module.scss';
import {useContext, useState} from "react";
import {Context} from "../../../index";
import posts from "../../../store/posts";

const CreatePost = () => {
    const {store} = useContext(Context);
    const [text, setText] = useState('');
    const createdPost = async () => {
        if (text === '') {
            return;
        }
        const newPost = {
            userId: store.user.id,
            text: text,
        };
        await posts.createPost(newPost.userId, newPost.text);
        setText('');
    }

    return (
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
    )
}

export default CreatePost;