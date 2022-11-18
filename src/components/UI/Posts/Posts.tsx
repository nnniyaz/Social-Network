import { PostInterface } from 'context';
import Post from '../Post/Post';
import classes from './Posts.module.scss';

interface Props {
    searchedPosts: PostInterface[];
}

const Posts = ({ searchedPosts }: Props) => {

    return (
        <div className={classes.main__feed__body}>
            {
                searchedPosts.map(post => (
                    <Post key={post.id} post={post} />
                ))
            }
        </div>
    )
}

export default Posts;