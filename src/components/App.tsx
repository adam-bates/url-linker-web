import { MantineProvider, ColorSchemeProvider } from "@mantine/core";

import { useColorScheme } from "@app/hooks/theme";

import Global from "./Global";
import Container from "./Container";

export default () => {
  const [colorScheme, toggleColorScheme] = useColorScheme();

  return (
    <ColorSchemeProvider
      colorScheme={colorScheme}
      toggleColorScheme={toggleColorScheme}
    >
      <MantineProvider theme={{ colorScheme }}>
        <Global />
        <Container />
      </MantineProvider>
    </ColorSchemeProvider>
  );
};
