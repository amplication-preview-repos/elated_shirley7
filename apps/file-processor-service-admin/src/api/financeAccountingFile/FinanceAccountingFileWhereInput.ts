import { JsonFilter } from "../../util/JsonFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type FinanceAccountingFileWhereInput = {
  content?: JsonFilter;
  fileName?: StringNullableFilter;
  fileSize?: IntNullableFilter;
  id?: StringFilter;
};
