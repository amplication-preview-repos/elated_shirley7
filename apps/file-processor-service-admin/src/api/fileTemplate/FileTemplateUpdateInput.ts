import { InputJsonValue } from "../../types";

export type FileTemplateUpdateInput = {
  configuration?: InputJsonValue;
  name?: string | null;
  typeField?: "Option1" | null;
};
