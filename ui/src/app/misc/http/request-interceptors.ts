import { Injectable, Injector } from '@angular/core';
import { HttpEvent, HttpHandler, HttpRequest, HttpInterceptor, HttpResponse, HttpProgressEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../../services/auth.service';

@Injectable()
export class HttpRequestInterceptor implements HttpInterceptor {

  constructor(private inj: Injector) { }

  intercept(req: HttpRequest<any>, next: any): Observable<any> {
    let authService = this.inj.get(AuthService);
    /* IDEA: Define header patterns somewhere more config-y, why AuthService? */
    const headers = authService.getHeaders();
    const headerReq = req.clone({ headers: headers });
    return next.handle(headerReq);
  }

}
