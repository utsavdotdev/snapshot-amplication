import { createUrl, get, isStoredJwt, post, setStoredJwt } from "./http";

export const me = async () => {
  return isStoredJwt()
    ? (await get(createUrl("/api/me")).catch(() => null))?.data
    : null;
};

export const login = async (username, password) => {
  try {
    const result = (
      await post(createUrl("/api/login"), { username, password }).catch(
        () => null
      )
    )?.data;

    if (!result) {
      return alert("Could not login");
    }
    setStoredJwt(result.accessToken);
    return me();
  } catch (error) {
    console.log(error);
  }
};

export const signup = async (username, password) => {
  const result = (
    await post(createUrl("/api/signup"), { username, password }).catch(
      () => null
    )
  )?.data;

  if (!result) {
    return alert("Could not sign up");
  }
  setStoredJwt(result.accessToken);
  return me();
};
