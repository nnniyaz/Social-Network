import { PostInterface } from 'context';
import classes from './Post.module.scss';

interface Props {
    post: PostInterface;
}

const Post = ({ post }: Props) => {
    return (
        <div className={classes.post__content}>
            <div className={classes.post__content__header}>
                <div className={classes.post__content__user}>
                    <div className={classes.post__content__avatar} style={{ backgroundColor: 'black' }}></div>
                    <div className={classes.post__content__username}>
                        <div className={classes.post__content__username__name}>{post.username}</div>
                        <div className={classes.post__content__username__nickname}>{`@${post.nickname}`}</div>
                    </div>
                </div>
                <div className={classes.post__content__time}>{post.time}</div>
            </div>
            <div className={classes.post__content__paragraph}>{post.paragraph}</div>
            <div className={classes.post__content__date}>{post.date}</div>
        </div>
    );
}

export default Post;