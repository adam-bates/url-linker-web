import { useState } from "react";
import { ColorScheme } from "@mantine/core";
import { useColorScheme as useMantineColorScheme } from "@mantine/hooks";

export const useColorScheme = (): [ColorScheme, () => void] => {
  const preferredColorScheme = useMantineColorScheme() || "dark";

  const [colorScheme, setColorScheme] =
    useState<ColorScheme>(preferredColorScheme);

  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));

  return [colorScheme, toggleColorScheme];
};
