import { SortOrder } from "../../util/SortOrder";

export type FinanceAccountingFileOrderByInput = {
  content?: SortOrder;
  createdAt?: SortOrder;
  fileName?: SortOrder;
  fileSize?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
};
