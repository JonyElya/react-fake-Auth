import { RequestError } from "./error";

export const showError = (error: RequestError | string) => {
  if (typeof error === "string") {
    alert(error);
    return;
  }
  alert(error.message);
};
