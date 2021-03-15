import { phalette } from "./static/colorPhalette";

/* eslint-disable */

export const colors = {
  ...phalette
};

export const vars = {
  maxWidth: {
    main: "1080px"
  },
  navbar: {
    height: "100px",
    zIndex: 205
  },
  overlay: {
    zIndex: 208
  },
  backdrop: {
    zIndex: 210
  },
  sidebar: {
    zIndex: 220
  }
};

export const deviceSize = {
  mobile: {
    min: "1px",
    max: "768px"
  },
  tablet: {
    min: "769px",
    max: "1024px"
  },
  laptop: {
    min: "1025px",
    max: "1440px"
  }
};

export const media = {
  lessThanMobile: `@media(max-width: ${deviceSize.mobile.min})`,
  lessThanTablet: `@media(max-width: ${deviceSize.tablet.min})`,
  lessThanLaptop: `@media(max-width: ${deviceSize.laptop.min})`,
  greaterThanMobile: `@media(min-width: ${deviceSize.mobile.max})`,
  greaterThanTablet: `@media(min-width: ${deviceSize.mobile.max})`,
  greaterThanLaptop: `@media(min-width: ${deviceSize.mobile.max})`
};
