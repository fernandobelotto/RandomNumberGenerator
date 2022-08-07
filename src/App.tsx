import {
  Button,
  Center,
  Checkbox,
  CopyButton,
  NumberInput,
  Stack,
  Title,
} from "@mantine/core";
import { useState } from "react";

export default function App() {
  const [randomNumber, setRandomNumber] = useState(0);

  function generateRandomNumber() {
    setRandomNumber(Math.floor(Math.random() * 100));
  }

  // TODO: Add logic to to generate decimal numbers
  // TODO: Add logic to generate negative numbers
  // TODO: Add logic to respect the max and min values

  return (
    <>
      <Center
        style={{
          width: "100%",
          height: "100%",
          border: "1px solid #a0a0a0",
          padding: "32px",
          borderRadius: "4px",
        }}
      >
        <Stack>
          <Title align="center" order={1}>
            {randomNumber}
          </Title>

          <Button onClick={generateRandomNumber}>Generate</Button>

          <CopyButton value={randomNumber.toString()}>
            {({ copied, copy }) => (
              <Button color={copied ? "teal" : "blue"} onClick={copy}>
                {copied ? "Copied" : "Copy value"}
              </Button>
            )}
          </CopyButton>
          <NumberInput
            defaultValue={100}
            placeholder="Máx Value"
            label="Maximum Value"
          />
          <NumberInput
            defaultValue={100}
            placeholder="Min Value"
            label="Minimum Value"
          />
          <Checkbox label="generate negative numbers" />
          <Checkbox label="generate decimal numbers" />
        </Stack>
      </Center>
    </>
  );
}
