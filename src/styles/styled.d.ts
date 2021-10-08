import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    fonts: {
      basic: string;
    };
    palette: {
      heavyMetal: string;
      mountainMist: string;
    };
  }
}
