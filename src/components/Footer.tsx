import { Footer, Text } from "@mantine/core";

export default () => {
  return (
    <Footer height={45} pt="xs" pl="xl">
      <Text size="sm">&copy; {new Date().getFullYear()}</Text>
    </Footer>
  );
};
