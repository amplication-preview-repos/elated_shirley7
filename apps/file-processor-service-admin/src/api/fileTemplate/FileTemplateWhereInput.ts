import { JsonFilter } from "../../util/JsonFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type FileTemplateWhereInput = {
  configuration?: JsonFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  typeField?: "Option1";
};
