import React from "react";
import styled from "styled-components";

import Head from "atoms/Head";
import Login from "components/join/login/Login";

export default function fun({ user }) {
  return (
    <>
      <Head
        title={"Login (ログイン) | HAN SAHYEONのポートフォリオ"}
        url={"/join/login"}
      />
      <Wrapper>
        <Login />
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div``;

import { withSSRContext } from "aws-amplify";

export async function getServerSideProps({ req, res }) {
  const { Auth } = withSSRContext({ req });
  try {
    const user = await Auth.currentAuthenticatedUser();
    console.log({ user: user });
    res.writeHead(302, { Location: "/" });
    res.end();
  } catch (err) {
    // res.writeHead(302, { Location: "/profile" });
    // res.end();
  }
  return { props: {} };
}
