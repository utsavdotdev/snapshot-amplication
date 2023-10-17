import qs from "qs";
import { createUrl, get, patch, post } from "./http";

export const create = async (user_id, url) => {
  const result = (
    await post(createUrl("/api/images"), {
      userId: user_id,
      url: url,
    }).catch(() => null)
  )?.data;

  if (!result) {
    return alert("Could not save Image");
  }

  return result;
};

export const getAll = async (user_id) => {
  const query = qs.stringify({
    where: { userId: { id: user_id } },
    orderBy: { createdAt: "asc" },
  });
  const result = (await get(createUrl(`/api/images?where[userId][equals]=${user_id}`)).catch(() => null))
    ?.data;
  console.log(result)
  if (!result) {
    console.log("Could not get images");
    return [];
  }

  return result;
};
