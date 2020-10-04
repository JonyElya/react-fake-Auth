import { SignInData, User, UserRepository } from "../store/user/types";
import { constructDefaultError } from "./common/error";
import { RequestError } from "../store/common/error";
import { HttpClient } from "./http-client";

export class UserRepositoryImpl implements UserRepository {
  private httpClient: HttpClient;

  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient;
  }
  async getUser(request: SignInData): Promise<User | RequestError> {
    try {
      const params = { name: request.name, password: request.password };

      const result = await this.httpClient.get<User>(
        `https://5b44cc555bd4580014e2e822.mockapi.io/api/users`,
        { params }
      );
      return result.data;
    } catch (e) {
      return constructDefaultError(e);
    }
  }
}
