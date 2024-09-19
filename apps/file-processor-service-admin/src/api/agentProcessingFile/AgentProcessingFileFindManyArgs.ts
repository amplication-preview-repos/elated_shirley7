import { AgentProcessingFileWhereInput } from "./AgentProcessingFileWhereInput";
import { AgentProcessingFileOrderByInput } from "./AgentProcessingFileOrderByInput";

export type AgentProcessingFileFindManyArgs = {
  where?: AgentProcessingFileWhereInput;
  orderBy?: Array<AgentProcessingFileOrderByInput>;
  skip?: number;
  take?: number;
};
