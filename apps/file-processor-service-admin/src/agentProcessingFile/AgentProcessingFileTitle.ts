import { AgentProcessingFile as TAgentProcessingFile } from "../api/agentProcessingFile/AgentProcessingFile";

export const AGENTPROCESSINGFILE_TITLE_FIELD = "fileName";

export const AgentProcessingFileTitle = (
  record: TAgentProcessingFile
): string => {
  return record.fileName?.toString() || String(record.id);
};
