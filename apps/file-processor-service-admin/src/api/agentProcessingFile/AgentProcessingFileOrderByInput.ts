import { SortOrder } from "../../util/SortOrder";

export type AgentProcessingFileOrderByInput = {
  agentId?: SortOrder;
  createdAt?: SortOrder;
  fileName?: SortOrder;
  id?: SortOrder;
  processingDate?: SortOrder;
  updatedAt?: SortOrder;
};
