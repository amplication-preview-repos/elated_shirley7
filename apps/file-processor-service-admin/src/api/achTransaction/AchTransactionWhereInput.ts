import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type AchTransactionWhereInput = {
  amount?: FloatNullableFilter;
  id?: StringFilter;
  transactionDate?: DateTimeNullableFilter;
  transactionId?: StringNullableFilter;
};
