import { FinanceAccountingFile as TFinanceAccountingFile } from "../api/financeAccountingFile/FinanceAccountingFile";

export const FINANCEACCOUNTINGFILE_TITLE_FIELD = "fileName";

export const FinanceAccountingFileTitle = (
  record: TFinanceAccountingFile
): string => {
  return record.fileName?.toString() || String(record.id);
};
