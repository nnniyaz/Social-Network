import classes from './Post.module.scss';
import {IPost} from "../../../models/IPost";
import {formatDate, formatTime} from "../../../utils/feedUtil";

const Post = ({post}: { post: IPost }) => {
    return (
        <div className={classes.post__content}>
            <div className={classes.post__content__header}>
                <div className={classes.post__content__user}>
                    <div className={classes.post__content__avatar} style={{backgroundColor: 'black'}}></div>
                    <div className={classes.post__content__username}>
                        <div className={classes.post__content__username__name}>{post.userName}</div>
                        <div className={classes.post__content__username__nickname}>{post.email}</div>
                    </div>
                </div>
            </div>
            <div className={classes.post__content__paragraph}>{post.text}</div>
            <div className={classes.post__content__published__at}>
                <div className={classes.post__content__published__at__date}>{formatDate(post.createdAt)}</div>
                <div className={classes.post__content__published__at__time}>{formatTime(post.createdAt)}</div>
            </div>
        </div>
    );
}

export default Post;