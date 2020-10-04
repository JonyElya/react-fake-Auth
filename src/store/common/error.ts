export interface RequestError extends Error {
  status?: number;
  message: string;
  name: "api" | "infrastructure";
  isError: true;
  data?: unknown;
}

export function isRequestError(error: unknown): error is RequestError {
  return (error as RequestError).isError;
}
