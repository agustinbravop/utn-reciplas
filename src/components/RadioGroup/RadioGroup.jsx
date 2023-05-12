import { Radio, RadioGroup as ChakraRadioGroup, Stack } from "@chakra-ui/react";
import { useState } from "react";

function RadioGroup({ options }) {
  const [value, setValue] = useState("1");

  return (
    <ChakraRadioGroup onChange={setValue} value={value}>
      <Stack direction="row">
        {options.map((opt, idx) => {
          return <Radio value={idx}>{opt}</Radio>;
        })}
      </Stack>
    </ChakraRadioGroup>
  );
}

export default RadioGroup;
