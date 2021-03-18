import { API } from "aws-amplify";
import { getPost, listPosts } from "graphql/queries";
import "configureAmplify";
import { useRouter } from "next/router";

export default function fun({ post }) {
  const router = useRouter();

  return (
    <>
      {router.isFallback ? (
        <div>Loading...</div>
      ) : (
        <div>
          <h2>{post.name}</h2>
          <p>{post.content}</p>
          <span>By: {post.username}</span>
        </div>
      )}
    </>
  );
}

export async function getStaticPaths() {
  const postData: any = await API.graphql({ query: listPosts });
  const postIds = postData.data.listPosts.items.map((post) => ({
    params: { id: post.id },
  }));
  return {
    paths: postIds,
    fallback: true,
  };
}

export async function getStaticProps(context) {
  const id = context.params.id;
  const post: any = await API.graphql({ query: getPost, variables: { id } });
  return {
    props: {
      post: post.data.getPost,
    },
  };
}
