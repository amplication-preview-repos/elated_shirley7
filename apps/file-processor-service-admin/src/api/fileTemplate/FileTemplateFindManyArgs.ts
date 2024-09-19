import { FileTemplateWhereInput } from "./FileTemplateWhereInput";
import { FileTemplateOrderByInput } from "./FileTemplateOrderByInput";

export type FileTemplateFindManyArgs = {
  where?: FileTemplateWhereInput;
  orderBy?: Array<FileTemplateOrderByInput>;
  skip?: number;
  take?: number;
};
