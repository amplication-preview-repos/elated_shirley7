import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const FinanceAccountingFileCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <div />
        <TextInput label="fileName" source="fileName" />
        <NumberInput step={1} label="fileSize" source="fileSize" />
      </SimpleForm>
    </Create>
  );
};
