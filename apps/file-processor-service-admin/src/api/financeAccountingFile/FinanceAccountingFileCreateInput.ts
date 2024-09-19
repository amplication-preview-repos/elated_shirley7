import { InputJsonValue } from "../../types";

export type FinanceAccountingFileCreateInput = {
  content?: InputJsonValue;
  fileName?: string | null;
  fileSize?: number | null;
};
