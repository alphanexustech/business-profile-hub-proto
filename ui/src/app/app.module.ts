import { Injector, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppProviders } from './providers';
import { AppImports } from './imports';
import { AppDeclarations } from './declarations';
import { AppComponent } from './app.component';
import { OutputAboutComponent } from './components/output-about/output-about.component';
import { OutputContactComponent } from './components/output-contact/output-contact.component';
import { ConfirmPurchaseComponent } from './components/confirm-purchase/confirm-purchase.component';

import { createCustomElement } from '@angular/elements';

@NgModule({
  declarations: [ AppDeclarations, OutputAboutComponent, OutputContactComponent, ConfirmPurchaseComponent ],
  imports: [ AppRoutingModule, AppImports ],
  providers: [ AppProviders ],
  bootstrap: [ AppComponent ]
})

export class AppModule {
  constructor(private injector: Injector) {
    const el = createCustomElement(OutputAboutComponent, { injector });
    customElements.define('rn-about', el);
  }
  ngDoBootstrap() {}
}
