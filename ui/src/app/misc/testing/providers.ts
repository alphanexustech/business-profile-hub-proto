import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpRequestInterceptor } from '../../misc/http/request-interceptors';
import { AuthService } from '../../services/auth.service';


export const TestProviders: any[] = [
  AuthService,
  {
    provide: HTTP_INTERCEPTORS,
    useClass: HttpRequestInterceptor,
    multi: true
  }
];
