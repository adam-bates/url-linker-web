import {
  Header as MantineHeader,
  Text,
  MediaQuery,
  Burger,
  useMantineTheme,
} from "@mantine/core";
import { Dispatch } from "react";

type NavbarProps = {
  opened: boolean;
  setOpened: Dispatch<boolean | ((prevState: boolean) => boolean)>;
};

export const Header = ({ opened, setOpened }: NavbarProps) => {
  const theme = useMantineTheme();

  return (
    <MantineHeader height={70} p="md">
      <div style={{ display: "flex", alignItems: "center", height: "100%" }}>
        <MediaQuery largerThan="sm" styles={{ display: "none" }}>
          <Burger
            opened={opened}
            onClick={() => setOpened((o) => !o)}
            size="sm"
            color={theme.colors.gray[6]}
            mr="xl"
          />
        </MediaQuery>

        <Text>Application header</Text>
      </div>
    </MantineHeader>
  );
};
