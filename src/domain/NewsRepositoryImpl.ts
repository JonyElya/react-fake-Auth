import { NewsRepository, Post } from "../store/news/types";
import { HttpClient } from "./http-client";
import { constructDefaultError } from "./common/error";
import { RequestError } from "../store/common/error";

export class NewsRepositoryImpl implements NewsRepository {
  private httpClient: HttpClient;

  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient;
  }

  async getNews(): Promise<Post[] | RequestError> {
    try {
      const result = await this.httpClient.get<Post[]>(
        `https://5b44cc555bd4580014e2e822.mockapi.io/api/news`
      );
      console.log(result.data);
      return result.data;
    } catch (e) {
      return constructDefaultError(e);
    }
  }
  async addPost(request: Post): Promise<Post[] | RequestError> {
    try {
      const result = await this.httpClient.post<Post[] | RequestError>(
        `https://5b44cc555bd4580014e2e822.mockapi.io/api/news`,
        { request }
      );
      return result.data;
    } catch (e) {
      return constructDefaultError(e);
    }
  }
}
