import { Radio, RadioGroup, } from "@chakra-ui/react";
import {React, Stack} from "react";

export default function OptionRadio2({option1,option2}) {
    const [value, setValue] = React.useState('1')
    return (
      <RadioGroup onChange={setValue} value={value}>
        <Stack direction='row'>
          <Radio value='1'>{option1}</Radio>
          <Radio value='2'>{option2}</Radio>
        </Stack>
      </RadioGroup>
    )
  }

  export function OptionRadio3({option1,option2,option3}) {
    const [value, setValue] = React.useState('1')
    return (
      <RadioGroup onChange={setValue} value={value}>
        <Stack direction='row'>
          <Radio value='1'>{option1}</Radio>
          <Radio value='2'>{option2}</Radio>
          <Radio value='3'>{option3}</Radio>
        </Stack>
      </RadioGroup>
    )
  }