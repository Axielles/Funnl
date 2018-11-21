import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarrousselComponent } from './carroussel/carroussel.component';
import { IdeasComponent } from './ideas/ideas.component';
import { IdeasListComponent } from './ideas-list/ideas-list.component';
import { LateralComponent } from './lateral/lateral.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    CarrousselComponent,
    IdeasComponent,
    IdeasListComponent,
    LateralComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule
  ],
  providers: [NgbCarouselConfig],
  bootstrap: [AppComponent]
})
export class AppModule { }
