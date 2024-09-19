import { CaseModel as TCaseModel } from "../api/caseModel/CaseModel";

export const CASEMODEL_TITLE_FIELD = "title";

export const CaseModelTitle = (record: TCaseModel): string => {
  return record.title?.toString() || String(record.id);
};
