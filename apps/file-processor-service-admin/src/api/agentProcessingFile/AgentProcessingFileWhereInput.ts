import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type AgentProcessingFileWhereInput = {
  agentId?: StringNullableFilter;
  fileName?: StringNullableFilter;
  id?: StringFilter;
  processingDate?: DateTimeNullableFilter;
};
