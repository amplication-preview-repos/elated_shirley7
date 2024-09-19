import { AchTransaction as TAchTransaction } from "../api/achTransaction/AchTransaction";

export const ACHTRANSACTION_TITLE_FIELD = "transactionId";

export const AchTransactionTitle = (record: TAchTransaction): string => {
  return record.transactionId?.toString() || String(record.id);
};
