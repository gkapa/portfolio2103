import styled, { css } from "styled-components";
import { media } from "styles/theme";

interface IProps {
  when:
    | "lessThanMobile"
    | "lessThanTablet"
    | "lessThanLaptop"
    | "greaterThanMobile"
    | "greaterThanTablet"
    | "greaterThanLaptop";
}

export default styled.div.attrs(() => ({}))<IProps>`
  ${(p) => {
    return css`
      ${media[p.when]} {
        display: none;
      }
    `;
  }}
`;
