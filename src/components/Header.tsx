import { Dispatch, ReactNode } from "react";
import {
  Header,
  MediaQuery,
  Burger,
  Text,
  Group,
  Grid,
  Container,
  Button,
  useMantineTheme,
} from "@mantine/core";
import { BrandGithub, Files, Terminal } from "tabler-icons-react";

type NavbarProps = {
  navbarOpened: boolean;
  setNavbarOpened: Dispatch<boolean | ((prevState: boolean) => boolean)>;
};

export default ({ navbarOpened, setNavbarOpened }: NavbarProps) => {
  const theme = useMantineTheme();

  return (
    <Header height={80}>
      <MediaQuery largerThan="sm" styles={{ display: "none" }}>
        <Burger
          opened={navbarOpened}
          onClick={() => setNavbarOpened((opened) => !opened)}
          size="sm"
          color={theme.colors.gray[6]}
          mr="xl"
        />
      </MediaQuery>

      <Grid columns={2} justify="space-between">
        <Grid.Col span={1}>
          <Group direction="column" spacing={0} pt="xs" pl="md">
            <Group direction="row" spacing={0}>
              <Button
                component="a"
                target="_blank"
                rel="noopener noreferrer"
                href="https://g3t.ca"
                leftIcon={<Terminal />}
                variant="subtle"
                color="gray"
                p={0}
              >
                <Text size="xl" weight="bold">
                  g3t.ca
                </Text>
              </Button>
            </Group>
            <Text size="sm">Dynamic url aliasing</Text>
          </Group>
        </Grid.Col>
        <Grid.Col span={1} mt="xl" pr="xl">
          <Container
            fluid
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-end",
              alignContent: "center",
            }}
          >
            <Button
              component="a"
              target="_blank"
              rel="noopener noreferrer"
              href="https://g3t.ca/docs"
              color="gray"
              leftIcon={<Files size={18} />}
            >
              <Text>API Docs</Text>
            </Button>

            <Button
              component="a"
              target="_blank"
              rel="noopener noreferrer"
              href="https://g3t.ca/repo"
              color="gray"
              leftIcon={<BrandGithub size={18} />}
              ml="xl"
            >
              <Text>GitHub</Text>
            </Button>
          </Container>
        </Grid.Col>
      </Grid>
    </Header>
  );
};
