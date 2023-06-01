import { Checkbox, CheckboxGroup as ChakraCheckboxGroup, Stack } from "@chakra-ui/react";
import { useState } from "react";

function CheckboxGroup({ options, ...props }) {
  const [value, setValue] = useState("0");

  return (
    <ChakraCheckboxGroup onChange={setValue} value={value} {...props}>
      <Stack direction="row" justify="space-around">
        {options.map((opt, idx) => {
          return <Checkbox value={`${idx}`}>{opt}</Checkbox>;
        })}
      </Stack>
    </ChakraCheckboxGroup>
  );
}

export default CheckboxGroup;
