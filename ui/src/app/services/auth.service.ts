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
export class AuthService implements OnInit, OnDestroy {
  LOGIN_URL: string = '';
  API_URL: string = '';
  Response: Object = {};
  token: string = '';
  subscriptions: Subscription[] = [];
  authenticated: boolean = false;

  constructor(private http: HttpClient) {
    this.defineAPIEndpoints();
  }

  ngOnInit() { }

  ngOnDestroy() {
    this.subscriptions.forEach(s => s.unsubscribe());
  }

  defineAPIEndpoints() {
    this.API_URL = 'http://localhost:5000';
    this.LOGIN_URL = this.API_URL; // Allows for login server to be different
  }

  authUser(token: string, userName?: string) {
    this.storeToken(token);
    if (userName) {
      localStorage.setItem('userName', userName);
    }
  }

  getToken(): any {
    return localStorage.getItem('token') ? localStorage.getItem('token') : null;
  }

  storeToken(token: string) {
    localStorage.setItem('token', token);
  }

  getBaseHeaders(): HttpHeaders {
    const headers = new HttpHeaders({
      // 'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    });
    return headers;
  }

  getAuthHeaders(): HttpHeaders {
    const headers = new HttpHeaders({
      // 'Content-Type': 'application/json',
      // 'Content-type': 'image/jpg',
      'Authorization': 'Bearer ' + this.getToken(),
      'Access-Control-Allow-Origin': '*',
    });
    return headers;
  }

  /* 
   * IDEA: Move to config, also, uncomment getAuthHeaders.Content-Type (application/json) 
   * and handle other Content-types better 
   */
  getHeaders(): HttpHeaders {
    if (this.getToken()) {
      return this.getAuthHeaders();
    } else {
      return this.getBaseHeaders();
    }
  }

  isAuthenticated(): boolean {
    let authenticated = false
    const token = localStorage.getItem('token')
    if (token) {
      authenticated = true
    }
    return authenticated
  }

  login(credentials: any): Observable<Response> {
    console.log(credentials)
    // '/auth/' is the endpoint for getting a token, in exchange for credentials
    return this.http.post<Response>(this.LOGIN_URL + '/auth/', credentials);
  }
}
