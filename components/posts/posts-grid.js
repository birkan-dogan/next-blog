// post-grid will render a couple of post items and we'll split the grid and the actual items into seperate components.

import PostItem from "./post-item";
import classes from "./posts-grid.module.css";

const PostsGrid = (props) => {
  const { posts } = props;
  return (
    <ul className={classes.grid}>
      {posts?.map((post) => (
        <PostItem key={post.slug} post={post} />
      ))}
    </ul>
  );
};

export default PostsGrid;
