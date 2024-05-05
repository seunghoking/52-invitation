import { createGlobalStyle } from "styled-components";

export const mqSize = {
  largest: "75em", // 1200px
  large: "56.25em", // 900px
  medium: "37.5em", // 600px
  small: "31.25em", // 500px
  smallest: "25em", // 400px
};

export const size = {
  fontMd: "1.5rem",
  sidebarWidth: "27rem",
  minimumSidebarWidth: "6rem",
};

export const color = {
  white: "#fff",
  red: "#C8102E",
  red1: "#920B21",
  gray: "#4A4A49",
  gray1: "#181818",
  gray10: "#8C8C8C",
  gray50: "#F7F8F9",
  gray500: "#73787E",
  gray800: "#26282B",
  black: "#000",
  gold: "#D7B998",
  main: "#A9B05D",
};

export type ColorsTypes = typeof color;

export const theme = {
  color,
  size,
  mq: {
    laptop: `@media only screen and (min-width: ${mqSize.largest})`,
    tablet: `@media only screen and (min-width: ${mqSize.large})`,
    mobile: `@media only screen and (min-width: ${mqSize.small})`,
  },
};

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'BROJSans-Bold'
    box-sizing: border-box;
  }

  /* Additional global styles can be added here */
`;

export const fontPresets = {
  headline: `
    font-size: 3.75rem;
    font-family: BROJSans-Semibold;
    font-weight: 600;
  `,
  body2: `
    font-size: 2.25rem;
    font-family: BROJSans-Regular;
    font-weight: 400;
  `,
  body3: `
    font-size: 1.75rem;
    font-family: BROJSans-Regular;
    font-weight: 400;
  `,
  body4: `
    font-size: 1.5rem;
    font-family: BROJSans-Regular;
    font-weight: 400;
  `,
  title1: `
    font-size: 3.125rem;
    font-family: BROJSans-Semibold;
    font-weight: 600;
  `,
  title2: `
    font-size: 2.25rem;
    font-family: BROJSans-Semibold;
    font-weight: 600;
  `,
  title3: `
    font-size: 1.75rem;
    font-family: BROJSans-Semibold;
    font-weight: 600;
  `,
  title4: `
    font-size: 1.5rem;
    font-family: BROJSans-Semibold;
    font-weight: 600;
  `,
  callout: `
    font-size: 1rem;
    font-family: BROJSans-Semibold;
    font-weight: 600;
  `,
};
export type FontPresets = keyof typeof fontPresets;

export default theme;
