import { AchTransactionWhereInput } from "./AchTransactionWhereInput";
import { AchTransactionOrderByInput } from "./AchTransactionOrderByInput";

export type AchTransactionFindManyArgs = {
  where?: AchTransactionWhereInput;
  orderBy?: Array<AchTransactionOrderByInput>;
  skip?: number;
  take?: number;
};
