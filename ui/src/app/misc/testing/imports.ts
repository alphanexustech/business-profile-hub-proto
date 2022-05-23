import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutes } from '../../routes';

export const TestImports: any[] = [
  RouterModule.forRoot(AppRoutes),
  HttpModule,
  HttpClientModule,
  BrowserModule,
  ReactiveFormsModule,
];
