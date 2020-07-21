import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { CoreSubscriptions } from '../subscriptions';
import { catchError } from 'rxjs/operators'

@Injectable()
export class CoreApiService extends CoreSubscriptions {
  private headers: HttpHeaders;

  constructor(protected httpClient: HttpClient) {
    super();
    this.headers = new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'});
  }

  get(url: string): Observable<string[]> {
    this.ngOnDestroy();
    return this.httpClient.get<string[]>(url).pipe(
      catchError(error => throwError(error))
    )
  }

  post(url: string, params: any): Observable<string[]> {
    this.ngOnDestroy();
    return this.httpClient.post<string[]>(url, params, {headers: this.headers}).pipe(
      catchError(error => throwError(error))
    )
  }
}
