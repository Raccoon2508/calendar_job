import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { HttpErrorResponse, HttpResponse } from "@angular/common/http";

import { Observable, throwError } from "rxjs";
import { catchError, retry } from "rxjs/operators";

export interface Config {
  timeFrom: string;
  timeTo: string;
  title: string;
  comment: string;
  priority: string;
}

@Injectable()
export class ConfigService {
  configUrl = "https://my-json-server.typicode.com/Raccoon2508/json-server/";
  userName = "Nikita";
  loginUrl = `${this.configUrl}${this.userName}`;

  constructor(private http: HttpClient) {}

  getConfig(dayID) {
    console.log(this.loginUrl);
    return this.http.get(this.loginUrl);
  }
}
