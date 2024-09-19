import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const AgentProcessingFileShow = (
  props: ShowProps
): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="agentId" source="agentId" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="fileName" source="fileName" />
        <TextField label="ID" source="id" />
        <TextField label="processingDate" source="processingDate" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
