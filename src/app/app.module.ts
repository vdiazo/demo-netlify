import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopheadingComponent } from './topheading/topheading.component';

import { HttpClientModule } from '@angular/common/http';
import { NewsapiservicesService } from './service/newsapiservices.service';
import { TecnologiaComponent } from './tecnologia/tecnologia.component';
// for HttpClient import:
import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';
import { PoliticaComponent } from './politica/politica.component';
import { NoticiasComponent } from './noticias/noticias.component';
import { MarkdownModule } from 'ngx-markdown';
import { EconomiaComponent } from './economia/economia.component';
import { UltimasComponent } from './ultimas/ultimas.component';
import { DeporteComponent } from './deporte/deporte.component';

@NgModule({
  declarations: [
    AppComponent,
    TopheadingComponent,
    TecnologiaComponent,
    PoliticaComponent,
    NoticiasComponent,
    EconomiaComponent,
    UltimasComponent,
    DeporteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    LoadingBarHttpClientModule,
    MarkdownModule.forRoot(),
  ],
  providers: [NewsapiservicesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
