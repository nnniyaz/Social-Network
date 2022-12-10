import classes from './Post.module.scss';
import {IPost} from "../../../models/IPost";
import {formatDate, formatTime} from "../../../utils/feedUtil";
import {ReactComponent as DotsIcon} from "../../../assets/icons/dots-horizontal.svg";
import {useState} from "react";
import OptionsModal from "../ModalContent/OptionsModal";
import posts from "../../../store/posts";

const Post = ({post}: { post: IPost }) => {
    const [visible, setVisible] = useState(false);

    const handleDelete = async () => {
        const res = await posts.deletePost(post._id);

        if (res?.success) {
            posts.setAllPosts(posts.allPosts.filter(p => p._id !== post._id));
            posts.setUserPosts(posts.userPosts.filter(p => p._id !== post._id));
            setVisible(false);
        }
    }

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
                <DotsIcon className={classes.post__content__option} onClick={() => setVisible(true)}/>
            </div>
            <div className={classes.post__content__paragraph}>{post.text}</div>
            <div className={classes.post__content__published__at}>
                <div className={classes.post__content__published__at__date}>{formatDate(post.createdAt)}</div>
                <div className={classes.post__content__published__at__time}>{formatTime(post.createdAt)}</div>
            </div>

            <OptionsModal visible={visible} setVisible={setVisible} handleDelete={handleDelete}/>
        </div>
    );
}

export default Post;