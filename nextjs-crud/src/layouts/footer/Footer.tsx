import React from "react";
import styled from "styled-components";

// Communication stuff
// import axios from 'axios';
// import Link from "next/link";
// import { useRouter } from "next/router";

import { colors } from "styles/theme";

export default function fun(props) {
  // const router = useRouter();  // ex: router.pathname, router.push("/")
  React.useEffect(() => {}, []);
  // async function fux() {}

  return (
    <>
      <Wrapper>Copyright © Han Sahyeon 2021</Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  width: 100%;
  margin-top: 100px;
  padding: 50px 0;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${colors.bluegray[10]};
  color: white;
`;
