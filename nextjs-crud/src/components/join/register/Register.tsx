import React from "react";
import styled from "styled-components";

// Components
import { vars } from "styles/theme";
import RegisterCard from "./RegisterCard";

export default function fun(props) {
  return (
    <>
      <Wrapper>
        <RegisterCard />
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: ${vars.maxWidth.main};
`;
