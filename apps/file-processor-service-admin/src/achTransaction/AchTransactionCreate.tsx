import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  DateTimeInput,
  TextInput,
} from "react-admin";

export const AchTransactionCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput label="amount" source="amount" />
        <DateTimeInput label="transactionDate" source="transactionDate" />
        <TextInput label="transactionId" source="transactionId" />
      </SimpleForm>
    </Create>
  );
};
