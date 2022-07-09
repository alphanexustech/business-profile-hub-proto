import { AuthGuard } from './misc/guards/auth.guard';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InputFormComponent } from './components/input-form/input-form.component';
import { OptionsComponent } from './components/options/options.component';
import { OutputLandingComponent } from './components/output-landing/output-landing.component';
import { OutputAboutComponent } from './components/output-about/output-about.component';
import { OutputContactComponent } from './components/output-contact/output-contact.component';
import { ConfirmPurchaseComponent } from './components/confirm-purchase/confirm-purchase.component';

const routes: Routes = [
  // IDEA: Change back to LoginComponent for authentication
  // {
  //   path: '*',
  //   component: LoginComponent,
  //   data: {
  //     header: 'Login'
  //   }
  // },
  {
    path: '*',
    component: InputFormComponent,
    data: {
      header: 'Getting Started!'
    }
  },
  {
    path: 'getting-started',
    component: InputFormComponent,
    data: {
      header: 'Getting Started!'
    }
  },
  {
    path: 'choose-layout',
    component: OptionsComponent,
    data: {
      header: 'Choose Layout!'
    }
  },
  {
    path: 'output-landing',
    component: OutputLandingComponent,
    data: {
      header: 'Let\'s Finish!'
    }
  },
  {
    path: 'output-about',
    component: OutputAboutComponent,
    data: {
      header: 'Let\'s Finish!'
    }
  },
  {
    path: 'output-contact',
    component: OutputContactComponent,
    data: {
      header: 'Let\'s Finish!'
    }
  },
  {
    path: 'confirm',
    component: ConfirmPurchaseComponent,
    data: {
      header: 'Approve Website Order'
    }
  },
  // IDEA: Change back to LoginComponent for authentication
  // {
  //   path: '**',
  //   component: LoginComponent,
  //   data: {
  //     header: 'Login'
  //   }
  // },
  {
    path: '**',
    component: InputFormComponent,
    data: {
      header: 'Getting Started!'
    }
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
