import { phalette } from "./static/colorPhalette";

/* eslint-disable */

export const colors = {
  ...phalette,
};

export const vars = {
  maxWidth: {
    main: "1080px",
  },
  zIndex: {
    navbar: 205,
    overlay: 208,
    backdrop: 210,
    sidebar: 220,
  },
  navbar: {
    height: "100px",
  },
};

export const deviceSize = {
  mobile: {
    min: "1px",
    max: "768px",
  },
  tablet: {
    min: "769px",
    max: "1024px",
  },
  laptop: {
    min: "1025px",
    max: "1440px",
  },
};

export const media = {
  lessThanMobile: `@media(max-width: ${deviceSize.mobile.min})`,
  lessThanTablet: `@media(max-width: ${deviceSize.tablet.min})`,
  lessThanLaptop: `@media(max-width: ${deviceSize.laptop.min})`,
  greaterThanMobile: `@media(min-width: ${deviceSize.mobile.max})`,
  greaterThanTablet: `@media(min-width: ${deviceSize.mobile.max})`,
  greaterThanLaptop: `@media(min-width: ${deviceSize.mobile.max})`,
};
