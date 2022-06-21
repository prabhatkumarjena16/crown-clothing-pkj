import React from "react";
import { Group, Input, FormInputLevel } from "./form-input.styles";

function FormInput({ label, ...otherProps }) {
  return (
    <Group>
      <Input {...otherProps} />
      {label && (
        <FormInputLevel shrink={otherProps.value.length}>
          {label}
        </FormInputLevel>
      )}
    </Group>
  );
}

export default FormInput;
