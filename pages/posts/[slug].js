import PostContent from "../../components/posts/post-detail/post-content";

import { getPostData, getPostsFiles } from "../../lib/posts-util";
import Head from "next/head";

const PostDetailPage = (props) => {
  return (
    <div>
      <Head>
        <title>{props.post.title}</title>
        <meta name="description" content={props.post.excerpt} />
      </Head>
      <PostContent post={props.post} />
    </div>
  );
};

export default PostDetailPage;

export const getStaticProps = (context) => {
  const {
    params: { slug },
  } = context;

  const postData = getPostData(slug); // this will give us the data

  return {
    props: {
      post: postData,
    },
    revalidate: 600,
  };
};

// we need to pair getStaticProps with getStaticPaths to let Next.js know which concrete slug values it should pre-generate.

export const getStaticPaths = () => {
  const postFileNames = getPostsFiles();

  const slugs = postFileNames.map((fileName) => fileName.replace(/\.md$/, ""));

  return {
    paths: slugs.map((slug) => ({ params: { slug: slug } })),
    fallback: false,
  };
};
