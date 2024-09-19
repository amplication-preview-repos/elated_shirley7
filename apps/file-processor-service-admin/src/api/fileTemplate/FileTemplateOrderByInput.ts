import { SortOrder } from "../../util/SortOrder";

export type FileTemplateOrderByInput = {
  configuration?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  typeField?: SortOrder;
  updatedAt?: SortOrder;
};
