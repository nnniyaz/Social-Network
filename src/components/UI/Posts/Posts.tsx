import Post from '../Post/Post';
import classes from './Posts.module.scss';
import {IPost} from "../../../models/IPost";

interface Props {
    searchedPosts: IPost[];
}

const Posts = ({searchedPosts}: Props) => {

    return (
        <div className={classes.main__feed__body}>
            {
                searchedPosts.length ? (
                    searchedPosts.map(post => (
                        <Post key={post._id} post={post}/>
                    ))
                ) : (
                    <div className={classes.main__feed__body__empty}>
                        <div className={classes.main__feed__body__empty__text}>No posts</div>
                    </div>
                )
            }
        </div>
    )
}

export default Posts;