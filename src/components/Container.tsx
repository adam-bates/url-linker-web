import { useState } from "react";
import { AppShell } from "@mantine/core";

import Header from "./Header";
import Navbar from "./Navbar";
import Content from "./content";
import Footer from "./Footer";

export default () => {
  const [navbarOpened, setNavbarOpened] = useState(false);
  const [form, setForm] = useState("none");

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
      header={
        <Header navbarOpened={navbarOpened} setNavbarOpened={setNavbarOpened} />
      }
      navbar={
        <Navbar
          opened={navbarOpened}
          setOpened={setNavbarOpened}
          setForm={setForm}
        />
      }
      footer={<Footer />}
    >
      <Content form={form} />
    </AppShell>
  );
};
