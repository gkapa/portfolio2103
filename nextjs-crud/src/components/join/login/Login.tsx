import React from "react";
import styled from "styled-components";

// Components
import { vars } from "styles/theme";
import LoginCard from "./LoginCard";

export default function fun(props) {
  return (
    <>
      <Wrapper>
        <LoginCard />
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: ${vars.maxWidth.main};
`;
