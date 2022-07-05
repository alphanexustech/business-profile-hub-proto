import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppProviders } from './providers';
import { AppImports } from './imports';
import { AppDeclarations } from './declarations';
import { AppComponent } from './app.component';
import { OutputAboutComponent } from './components/output-about/output-about.component';
import { OutputContactComponent } from './components/output-contact/output-contact.component';

@NgModule({
  declarations: [ AppDeclarations, OutputAboutComponent, OutputContactComponent ],
  imports: [ AppRoutingModule, AppImports ],
  providers: [ AppProviders ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
