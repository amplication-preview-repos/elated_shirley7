import { InputJsonValue } from "../../types";

export type FileTemplateCreateInput = {
  configuration?: InputJsonValue;
  name?: string | null;
  typeField?: "Option1" | null;
};
