import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppProviders } from './providers';
import { AppImports } from './imports';
import { AppDeclarations } from './declarations';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [ AppDeclarations ],
  imports: [ AppRoutingModule, AppImports ],
  providers: [ AppProviders ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
