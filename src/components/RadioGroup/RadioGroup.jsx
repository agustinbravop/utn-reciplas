import { Radio, RadioGroup as ChakraRadioGroup, Stack } from "@chakra-ui/react";
import { useState } from "react";

function RadioGroup({ options, ...props }) {
  const [value, setValue] = useState("0");

  return (
    <ChakraRadioGroup onChange={setValue} value={value} {...props}>
      <Stack direction="row" justify="space-around">
        {options.map((opt, idx) => {
          return <Radio value={`${idx}`}>{opt}</Radio>;
        })}
      </Stack>
    </ChakraRadioGroup>
  );
}

export default RadioGroup;
