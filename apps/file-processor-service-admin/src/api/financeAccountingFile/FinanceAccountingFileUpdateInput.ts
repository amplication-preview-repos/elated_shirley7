import { InputJsonValue } from "../../types";

export type FinanceAccountingFileUpdateInput = {
  content?: InputJsonValue;
  fileName?: string | null;
  fileSize?: number | null;
};
