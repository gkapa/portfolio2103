import React from "react";
import styled from "styled-components";

import Head from "atoms/Head";
import Register from "components/join/register/Register";

export default function fun({ user }) {
  return (
    <>
      <Head
        title={"Register (会員登録) | HAN SAHYEONのポートフォリオ"}
        url={"/join/register"}
      />
      <Wrapper>
        <Register />
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
    res.writeHead(302, { Location: "/" });
    res.end();
  } catch (err) {
    // res.writeHead(302, { Location: "/profile" });
    // res.end();
  }
  return { props: {} };
}
