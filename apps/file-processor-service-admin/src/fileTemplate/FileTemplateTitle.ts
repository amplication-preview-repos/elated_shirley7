import { FileTemplate as TFileTemplate } from "../api/fileTemplate/FileTemplate";

export const FILETEMPLATE_TITLE_FIELD = "name";

export const FileTemplateTitle = (record: TFileTemplate): string => {
  return record.name?.toString() || String(record.id);
};
