import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const AgentProcessingFileCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="agentId" source="agentId" />
        <TextInput label="fileName" source="fileName" />
        <DateTimeInput label="processingDate" source="processingDate" />
      </SimpleForm>
    </Create>
  );
};
