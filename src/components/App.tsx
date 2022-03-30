import { StrictMode } from "react";
import { MantineProvider, ColorSchemeProvider } from "@mantine/core";

import { useColorScheme } from "@app/hooks/theme";

import Global from "./Global";
import Container from "./Container";

export default () => {
  const [colorScheme, toggleColorScheme] = useColorScheme();

  return (
    <StrictMode>
      <ColorSchemeProvider
        colorScheme={colorScheme}
        toggleColorScheme={toggleColorScheme}
      >
        <MantineProvider
          withNormalizeCSS
          withGlobalStyles
          theme={{ colorScheme }}
        >
          <Global />
          <Container />
        </MantineProvider>
      </ColorSchemeProvider>
    </StrictMode>
  );
};
