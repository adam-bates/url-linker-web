import { Button, Container, Navbar, Stack, Title } from "@mantine/core";
import { Dispatch } from "react";

type NavbarProps = {
  opened: boolean;
  setOpened: Dispatch<boolean | ((prevState: boolean) => boolean)>;
  setForm: (form: string) => void;
};

export default ({ opened, setOpened, setForm }: NavbarProps) => {
  const handleClick = (form: string) => {
    setForm(form);
    setOpened(false);
  };

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
          <Button compact onClick={() => handleClick("create-alias")}>
            Create Alias
          </Button>

          <Button
            compact
            color="red"
            onClick={() => handleClick("change-password")}
          >
            Change Password
          </Button>
        </Stack>
      </Container>
    </Navbar>
  );
};
