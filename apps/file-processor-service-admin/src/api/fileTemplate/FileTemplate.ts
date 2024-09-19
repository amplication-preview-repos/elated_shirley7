import { JsonValue } from "type-fest";

export type FileTemplate = {
  configuration: JsonValue;
  createdAt: Date;
  id: string;
  name: string | null;
  typeField?: "Option1" | null;
  updatedAt: Date;
};
