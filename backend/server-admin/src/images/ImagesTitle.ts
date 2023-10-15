import { Images as TImages } from "../api/images/Images";

export const IMAGES_TITLE_FIELD = "userId";

export const ImagesTitle = (record: TImages): string => {
  return record.userId?.toString() || String(record.id);
};
