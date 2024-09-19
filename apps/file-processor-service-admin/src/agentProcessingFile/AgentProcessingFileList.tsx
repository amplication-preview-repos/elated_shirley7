import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const AgentProcessingFileList = (
  props: ListProps
): React.ReactElement => {
  return (
    <List
      {...props}
      title={"AgentProcessingFiles"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <TextField label="agentId" source="agentId" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="fileName" source="fileName" />
        <TextField label="ID" source="id" />
        <TextField label="processingDate" source="processingDate" />
        <DateField source="updatedAt" label="Updated At" />{" "}
      </Datagrid>
    </List>
  );
};
