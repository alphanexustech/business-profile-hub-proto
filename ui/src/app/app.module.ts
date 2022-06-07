import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppProviders } from './providers';
import { AppImports } from './imports';
import { AppDeclarations } from './declarations';
import { AppComponent } from './app.component';
import { LogoSquareComponent } from './components/logo-square/logo-square.component';
import { BasicParagraphComponent } from './components/basic-paragraph/basic-paragraph.component';
import { RowListComponent } from './components/row-list/row-list.component';
import { OutputLandingComponent } from './components/output-landing/output-landing.component';

@NgModule({
  declarations: [ AppDeclarations, LogoSquareComponent, BasicParagraphComponent, RowListComponent, OutputLandingComponent ],
  imports: [ AppRoutingModule, AppImports ],
  providers: [ AppProviders ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
