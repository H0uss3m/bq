
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccueilService } from "./services/accueil.service";
import { HttpClientModule } from '@angular/common/http';
import {SearchPipe} from './pipes/search.pipe';
@NgModule({
  declarations: [SearchPipe],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [SearchPipe],
  providers: []
})
export class CorsModule {
}
