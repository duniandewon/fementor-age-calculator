import { DefaultTheme } from "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    borderRadius: string;
    colors: {
      clrPrimary: string;
      clrError: string;
      neutral: {
        "100": string;
        "200": string;
        "400": string;
        "500": string;
        "800": string;
      };
    };
    fontFamily: {
      regular: string;
      bold: string;
      extraBold: string;
      extraBoldItalic: string;
    };
  }
}

const theme: DefaultTheme = {
  borderRadius: "10px",
  colors: {
    clrPrimary: "hsl(259, 100%, 65%)",
    clrError: "hsl(0, 100%, 67%)",
    neutral: {
      "100": "hsl(0, 0%, 100%)",
      "200": "hsl(0, 0%, 94%)",
      "400": "hsl(0, 0%, 86%)",
      "500": "hsl(0, 1%, 44%)",
      "800": "hsl(0, 0%, 8%)",
    },
  },
  fontFamily: {
    regular: "Poppins",
    bold: "Poppins Bold",
    extraBold: "Poppins extra Bold",
    extraBoldItalic: "Poppins extra Bold Italic",
  },
};

export default theme;
