import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type ImagesWhereInput = {
  id?: StringFilter;
  url?: StringNullableFilter;
  userId?: StringNullableFilter;
};
