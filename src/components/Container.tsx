import { useState } from "react";
import { AppShell, Text } from "@mantine/core";

import { Header, Navbar, Sidebar, Footer } from "./layout";

export default () => {
  const [opened, setOpened] = useState(false);

  return (
    <AppShell
      styles={(theme) => ({
        main: {
          background:
            theme.colorScheme === "dark"
              ? theme.colors.dark[8]
              : theme.colors.gray[0],
        },
      })}
      navbarOffsetBreakpoint="sm"
      asideOffsetBreakpoint="sm"
      fixed
      header={<Header opened={opened} setOpened={setOpened} />}
      navbar={<Navbar opened={opened} />}
      aside={<Sidebar />}
      footer={<Footer />}
    >
      <Text>Resize app to see responsive navbar in action</Text>
    </AppShell>
  );
};
