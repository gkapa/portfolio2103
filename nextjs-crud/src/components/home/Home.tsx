import React from "react";
import styled from "styled-components";

// Communication stuff
// import axios from 'axios';
import NextLink from "next/link";
// import NextRouter, { useRouter } from "next/router";
import { API } from "aws-amplify";
import { listPosts } from "graphql/queries";

// Material-ui stuff
// import Button from "@material-ui/core/Button";

// Redux stuff
// import { shallowEqual, useSelector } from "react-redux";
// import { useDispatch } from "react-redux";
// import { RootState } from "store";

// Components
// import { colors, vars } from "styles/theme";
// import Head from "atoms/Head";
// import Home from "components/home/Home";

export default function fun(props) {
  const [posts, updatePosts] = React.useState([]);
  React.useEffect(() => {
    fetchPosts();
  }, []);
  async function fetchPosts() {
    const postData: any = await API.graphql({ query: listPosts });
    updatePosts(postData.data.listPosts.items);
  }

  return (
    <>
      <Wrapper>
        <h1>Posts</h1>
        {posts.map((post) => (
          <NextLink key={post.id} href={`/posts/[id]`} as={`/posts/${post.id}`}>
            <h2 className="link-style">{post.name}</h2>
          </NextLink>
        ))}
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  width: 700px;
  margin: 0 auto;

  .link-style {
    cursor: pointer;
    padding: 10px 0px;
    border-bottom: 1px solid #ddd;
  }
`;
