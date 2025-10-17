export const getAccessToken = (): string | null =>
  sessionStorage.getItem("user");

export const setAccessToken = (token: string) =>
  sessionStorage.setItem("user", token);

export const clearTokens = (): void => {
  sessionStorage.removeItem("user");
};
