import { JsonValue } from "type-fest";

export type FinanceAccountingFile = {
  content: JsonValue;
  createdAt: Date;
  fileName: string | null;
  fileSize: number | null;
  id: string;
  updatedAt: Date;
};
