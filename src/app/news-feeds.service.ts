import { Injectable } from "@angular/core";
import {environment} from "../environments/environment";
import { HttpClient } from "@angular/common/http";

const API_URL = environment.API_url;
const API_KEY = environment.API_key;

@Injectable({
  providedIn: "root",
})
export class NewsFeedsService {
  constructor(private http: HttpClient) {}

  getNews(url) {
    return this.http.get(`${API_URL}/${url}&apiKEY=${API_KEY}`);
  }
}
