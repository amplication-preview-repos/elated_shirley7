import { SortOrder } from "../../util/SortOrder";

export type AchTransactionOrderByInput = {
  amount?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  transactionDate?: SortOrder;
  transactionId?: SortOrder;
  updatedAt?: SortOrder;
};
