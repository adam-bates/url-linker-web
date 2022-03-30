import { Global, MantineTheme, CSSObject } from "@mantine/core";

const buildGlobalStyles = (theme: MantineTheme): CSSObject => ({
  "*, *::before, *::after": {
    boxSizing: "border-box",
  },

  body: {
    ...theme.fn.fontStyles(),
    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
    color: theme.colorScheme === "dark" ? theme.colors.dark[0] : theme.black,
    lineHeight: theme.lineHeight,
  },
});

export default () => {
  return <Global styles={buildGlobalStyles} />;
};
