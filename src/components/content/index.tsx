import { Container, Text, Title } from "@mantine/core";

import CreateAlias from "./CreateAlias";
import ChangePassword from "./ChangePassword";

type ContentProps = {
  form: string;
};

export default ({ form }: ContentProps) => {
  switch (form) {
    case "create-alias":
      return <CreateAlias />;
    case "change-password":
      return <ChangePassword />;
    default:
      return <MainContent />;
  }
};

const MainContent = () => {
  return (
    <Container my="lg">
      <Title my="lg">URL Linker</Title>
      <Text size="lg">Choose an option on the left to get started.</Text>
    </Container>
  );
};
