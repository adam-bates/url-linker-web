import { Button, Container, Navbar, Stack, Title } from "@mantine/core";

type NavbarProps = {
  opened: boolean;
  setForm: (form: string) => void;
};

export default ({ opened, setForm }: NavbarProps) => {
  return (
    <Navbar
      p="md"
      hiddenBreakpoint="sm"
      hidden={!opened}
      width={{ sm: 200, lg: 300 }}
    >
      <Title order={3}>Requests</Title>
      <Container ml={0} mt="md">
        <Stack spacing="md">
          <Button compact onClick={() => setForm("create-alias")}>
            Create Alias
          </Button>

          {/* <Button
            compact
            color="red"
            onClick={() => setForm("change-password")}
          >
            Change Password
          </Button> */}
        </Stack>
      </Container>
    </Navbar>
  );
};
