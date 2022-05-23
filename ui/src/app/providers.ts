import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpRequestInterceptor } from './misc/http/request-interceptors';
import { AuthService } from './services/auth.service';
import { MainService } from './services/main.service';

export const AppProviders: any[] = [
  AuthService,
  MainService,
  {
    provide: HTTP_INTERCEPTORS,
    useClass: HttpRequestInterceptor,
    multi: true
  }
];
