import { CheckIcon, CloseIcon, EditIcon } from "@chakra-ui/icons";
import {
  ButtonGroup,
  Editable,
  EditableInput,
  EditablePreview,
  Flex,
  IconButton,
  Input,
  useEditableControls,
} from "@chakra-ui/react";

function EditableControls() {
  const {
    isEditing,
    getSubmitButtonProps,
    getCancelButtonProps,
    getEditButtonProps,
  } = useEditableControls();

  return isEditing ? (
    <ButtonGroup justifyContent="center" size="sm">
      <IconButton icon={<CheckIcon />} {...getSubmitButtonProps()} />
      <IconButton icon={<CloseIcon />} {...getCancelButtonProps()} />
    </ButtonGroup>
  ) : (
    <Flex justifyContent="center">
      <IconButton size="sm" icon={<EditIcon />} {...getEditButtonProps()} />
    </Flex>
  );
}

export default function EditableText({ defaultValue }) {
  return (
    <Editable
      textAlign="center"
      defaultValue={defaultValue.toString() ?? "..."}
      fontSize="2xl"
      isPreviewFocusable={false}
      display="flex"
      gap="7px"
      alignItems="center"
    >
      <EditablePreview fontSize="md" />
      {/* Here is the custom input */}
      <Input as={EditableInput} width="auto" />
      <EditableControls />
    </Editable>
  );
}
