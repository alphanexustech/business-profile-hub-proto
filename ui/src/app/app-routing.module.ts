import { AuthGuard } from './misc/guards/auth.guard';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { TableOverviewComponent } from './components/table-overview/table-overview.component';
import { TableDetailsComponent } from './components/table-details/table-details.component';
import { TableDetailsModifyComponent } from './components/table-details-modify/table-details-modify.component';
import { ContextOverviewComponent } from './components/context-overview/context-overview.component';
import { OutputLandingComponent } from './components/output-landing/output-landing.component';

const routes: Routes = [
  {
    path: '*',
    component: LoginComponent,
    data: {
      header: 'Login'
    }
  },
  {
    path: 'home',
    canActivate: [AuthGuard],
    component: HomeComponent,
    data: {
      header: 'Home'
    }
  },
  {
    path: 'overview',
    canActivate: [AuthGuard],
    component: TableOverviewComponent,
    data: {
      header: 'Overivew'
    }
  },
  {
    path: 'element/new',
    canActivate: [AuthGuard],
    component: TableDetailsModifyComponent,
    data: {
      header: 'New Element'
    }
  },
  {
    path: 'element/:id',
    canActivate: [AuthGuard],
    component: TableDetailsComponent,
    data: {
      header: 'Element'
    }
  },
  {
    path: 'context',
    canActivate: [AuthGuard],
    component: ContextOverviewComponent,
    data: {
      header: 'Context'
    }
  },
  {
    path: 'output-landing',
    canActivate: [AuthGuard],
    component: OutputLandingComponent,
    data: {
      header: 'Let\'s Finish!'
    }
  },
  {
    path: '**',
    component: LoginComponent,
    data: {
      header: 'Login'
    }
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
