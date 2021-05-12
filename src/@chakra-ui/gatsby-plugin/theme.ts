import { ChakraTheme, extendTheme } from "@chakra-ui/react";

const theme: Partial<ChakraTheme> = {
  colors: {
    primary: "#731E18",
    secondary: "#1B3C55",
    background: "#F8F8F8",
    backdrop: "#393939"
  },
  fonts: {
    heading: `'avenir next', avenir, sans-serif`,
    body: `'avenir next', avenir, sans-serif`
  }
};

export default extendTheme(theme);
