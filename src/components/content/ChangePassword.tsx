import { useState } from "react";
import {
  Title,
  Container,
  TextInput,
  Group,
  Button,
  Text,
  Anchor,
  PasswordInput,
} from "@mantine/core";
import { useForm } from "@mantine/hooks";
import axios from "axios";

export default () => {
  const form = useForm({
    initialValues: {
      username: "",
      password: "",
      newPassword: "",
      confirmNewPassword: "",
    },
    validationRules: {
      newPassword: (value) => 6 <= value.length && value.length <= 1024,
      confirmNewPassword: (value, values) => value === values?.newPassword,
    },
  });

  const [result, setResult] = useState<string | undefined>();

  return (
    <Container my="lg">
      <Title my="lg">Create URL Alias</Title>
      <form
        onSubmit={form.onSubmit(
          async ({
            username: clientId,
            password: clientSecret,
            newPassword: newClientSecret,
          }) => {
            let res;
            try {
              res = await axios.put(
                "https://g3t.ca/api/v1/users/self",
                { clientSecret: newClientSecret },
                {
                  headers: {
                    "g3t-client-id": clientId,
                    "g3t-client-secret": clientSecret,
                  },
                  withCredentials: true,
                }
              );
            } catch (e) {
              console.error(e);
              setResult("Error!");
            }

            if (res?.status === 200) {
              setResult("Success!");
            } else {
              console.warn(res?.data);
              setResult("Unsuccessful!");
            }
          }
        )}
      >
        <TextInput
          required
          label="Username"
          {...form.getInputProps("username")}
        />
        <PasswordInput
          required
          label="Current Password"
          {...form.getInputProps("password")}
          py="lg"
        />

        <PasswordInput
          required
          label="New Password"
          {...form.getInputProps("newPassword")}
          py="lg"
        />
        <PasswordInput
          required
          label="Confirm Password"
          {...form.getInputProps("confirmNewPassword")}
          pb="lg"
        />

        <Group position="left" py="lg">
          <Button type="submit">Update Password</Button>
        </Group>
      </form>

      {result && <Text size="xl">{result}</Text>}
    </Container>
  );
};
