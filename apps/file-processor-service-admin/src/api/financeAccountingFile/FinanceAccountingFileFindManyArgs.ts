import { FinanceAccountingFileWhereInput } from "./FinanceAccountingFileWhereInput";
import { FinanceAccountingFileOrderByInput } from "./FinanceAccountingFileOrderByInput";

export type FinanceAccountingFileFindManyArgs = {
  where?: FinanceAccountingFileWhereInput;
  orderBy?: Array<FinanceAccountingFileOrderByInput>;
  skip?: number;
  take?: number;
};
