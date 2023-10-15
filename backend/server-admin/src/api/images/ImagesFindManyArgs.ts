import { ImagesWhereInput } from "./ImagesWhereInput";
import { ImagesOrderByInput } from "./ImagesOrderByInput";

export type ImagesFindManyArgs = {
  where?: ImagesWhereInput;
  orderBy?: Array<ImagesOrderByInput>;
  skip?: number;
  take?: number;
};
