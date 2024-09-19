import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const AgentProcessingFileEdit = (
  props: EditProps
): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="agentId" source="agentId" />
        <TextInput label="fileName" source="fileName" />
        <DateTimeInput label="processingDate" source="processingDate" />
      </SimpleForm>
    </Edit>
  );
};
