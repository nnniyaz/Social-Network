import classes from './CreatePost.module.scss';

interface Props {
    text: string;
    setText: (text: string) => void;
    createdPost: () => void;
}

const CreatePost = ({ text, setText, createdPost }: Props) => {
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