import PostHeader from "./post-header";
import classes from "./post-content.module.css";

import ReactMarkdown from "react-markdown";

const PostContent = ({ post }) => {
  const imagePath = `/images/posts/${post.slug}/${post.image}`;
  return (
    <article className={classes.content}>
      <PostHeader image={imagePath} title={post.title} />
      <ReactMarkdown>{post.content}</ReactMarkdown>
    </article>
  );
};
export default PostContent;
