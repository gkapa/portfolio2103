import React from "react";
import styled from "styled-components";

// Components
import { vars } from "styles/theme";
import ConfirmCard from "./ConfirmCard";

export default function fun(props) {
  return (
    <>
      <Wrapper>
        <ConfirmCard />
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: ${vars.maxWidth.main};
`;
