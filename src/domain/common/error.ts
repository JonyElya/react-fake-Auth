import { AxiosError } from "axios";
import { RequestError } from "../../store/common/error";

export const constructDefaultError = (e: Error): RequestError => {
  const err = e as AxiosError;
  if (!err.isAxiosError) {
    return {
      name: "api",
      message: e.message,
      isError: true,
    };
  }
  return {
    name: "infrastructure",
    status: err.response?.status,
    isError: true,
    message: err.response?.data || err.message,
  };
};
