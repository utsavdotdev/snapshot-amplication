import { ImagesWhereUniqueInput } from "./ImagesWhereUniqueInput";
import { ImagesUpdateInput } from "./ImagesUpdateInput";

export type UpdateImagesArgs = {
  where: ImagesWhereUniqueInput;
  data: ImagesUpdateInput;
};
