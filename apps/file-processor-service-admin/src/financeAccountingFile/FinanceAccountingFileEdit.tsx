import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const FinanceAccountingFileEdit = (
  props: EditProps
): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <div />
        <TextInput label="fileName" source="fileName" />
        <NumberInput step={1} label="fileSize" source="fileSize" />
      </SimpleForm>
    </Edit>
  );
};
