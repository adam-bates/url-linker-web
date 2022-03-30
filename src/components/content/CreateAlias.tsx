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
      key: "",
      url: "",
    },
  });

  const [result, setResult] = useState<string | undefined>();

  return (
    <Container my="lg">
      <Title my="lg">Create URL Alias</Title>
      <form
        onSubmit={form.onSubmit(
          async ({ username: clientId, password: clientSecret, key, url }) => {
            let res;
            try {
              res = await axios.post(
                "https://g3t.ca/api/v1/urls",
                { key, url },
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
          label="Password"
          {...form.getInputProps("password")}
          py="lg"
        />

        <TextInput
          required
          label="Custom Key"
          placeholder="my/url"
          {...form.getInputProps("key")}
          py="lg"
        />
        <TextInput
          required
          label="Destination URL"
          placeholder="https://www.some-long-url.com?abc=123"
          {...form.getInputProps("url")}
          pb="lg"
        />

        {form.values.key.length > 0 && (
          <>
            <Text color="gray" size="sm">
              If successful, the following alias will be created:
            </Text>
            <Anchor
              size="sm"
              href={`https://g3t.ca/${form.values.key}`}
              target="_blank"
            >
              https://g3t.ca/{form.values.key}
            </Anchor>
          </>
        )}

        <Group position="left" py="lg">
          <Button type="submit">Create Link</Button>
        </Group>
      </form>

      {result && <Text size="xl">{result}</Text>}
    </Container>
  );
};
