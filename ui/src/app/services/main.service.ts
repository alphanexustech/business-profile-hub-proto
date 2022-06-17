import { Inject, Injectable, Optional, OnInit, OnDestroy } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable, Subject, Subscription } from 'rxjs';

class Response {
  constructor(
    public data: any,
  ) {}
}

@Injectable({
  providedIn: 'root'
})
export class MainService {

  API_URL: string = '';
  Response: Object = {};
  subscriptions: Subscription[] = [];

  constructor(private http: HttpClient) {
    this.defineAPIEndpoints();
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.subscriptions.forEach(s=> s.unsubscribe());
  }

  defineAPIEndpoints() {
    this.API_URL = 'http://localhost:5000';
  }

  /*
   * Generic CRUD
   */

  get(endpoint: string): Observable<Response> {
    return this.http.get<Response>(this.API_URL + endpoint);
  }

  post(endpoint: string, request: any): Observable<Response> {
    return this.http.post<Response>(this.API_URL + endpoint, request);
  }

  put(endpoint: string, request: any): Observable<Response> {
    return this.http.put<Response>(this.API_URL + endpoint, request);
  }

  delete(endpoint: string): Observable<Response> {
    return this.http.delete<Response>(this.API_URL + endpoint);
  }

  /*
   * AWS CRUD
   */

  awsFilePost(endpoint: string, request: any): Observable<Response> {
    console.log('POST')
    return this.http.post<any>(endpoint, request);
  }

  awsFilePut(endpoint: string, request: any): Observable<Response> {
    return this.http.put<any>(endpoint, request);
  }

}
