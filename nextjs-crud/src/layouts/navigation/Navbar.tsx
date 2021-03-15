import React from "react";
import styled from "styled-components";

import Hide from "atoms/Hide";
import MobileUI from "./MobileUI";
import LaptopUI from "./LaptopUI";

export default function fun(props) {
  return (
    <Container>
      <Hide when="greaterThanTablet">
        <MobileUI />
      </Hide>
      <Hide when="lessThanTablet">
        <LaptopUI />
      </Hide>
    </Container>
  );
}

const Container = styled.div``;
