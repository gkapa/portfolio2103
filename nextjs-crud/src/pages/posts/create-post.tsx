import React from "react";
import styled from "styled-components";

import { useRouter } from "next/router";
import { createPost } from "graphql/mutations";
import { API } from "aws-amplify";

const initialForm = {
  title: "",
  content: "",
};

export default function fun() {
  const router = useRouter();

  const [formState, setFormState] = React.useState({
    ...initialForm,
  });

  const handleChange = React.useCallback(
    (_e) => {
      setFormState((prev) => ({ ...prev, [_e.target.name]: _e.target.value }));
    },
    [formState],
  );

  async function createPostMutation() {
    if (!formState.title || !formState.content) return;

    const data = await API.graphql({
      query: createPost,
      variables: { input: formState },
      // @ts-ignore
      authMode: "AMAZON_COGNITO_USER_POOLS",
    });
    console.log({ data: data });
    // router.push(`/posts/${data.createPost.id}`);
  }

  return (
    <Wrapper>
      <div className={"formStyle"}>
        <input
          placeholder="Post Title"
          name="title"
          onChange={(e) => handleChange(e)}
          className={"inputStyle"}
        />
        <textarea
          placeholder="Post content"
          name="content"
          onChange={(e) => handleChange(e)}
          className={"inputStyle"}
        />
        <button onClick={() => createPostMutation()} className={"buttonStyle"}>
          Create Post
        </button>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  .formStyle {
    display: flex;
    flex-direction: column;
    margin: 40px;
  }

  .inputStyle {
    padding: 7px;
    margin-bottom: 8px;
    width: 700px;
  }
  .buttonStyle {
    background-color: black;
    width: 400px;
    height: 40px;
    color: white;
    font-size: 16px;
    cursor: pointer;
  }
`;
