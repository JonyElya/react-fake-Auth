import basic from "axios";

const TIMEOUT = 100000;

const httpClient = basic.create({
  timeout: TIMEOUT,
  timeoutErrorMessage: "Request timeout, please try again later",
});

export { httpClient };

export type HttpClient = typeof httpClient;
