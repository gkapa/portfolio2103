import React from "react";
import styled from "styled-components";

import Head from "atoms/Head";
import Confirm from "components/join/confirm/Confirm";

export default function fun(props) {
  return (
    <>
      <Head
        title={"Confirm (登録認証) | HAN SAHYEONのポートフォリオ"}
        url={"/join/confirm"}
      />
      <Wrapper>
        <Confirm />
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
