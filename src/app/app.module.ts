import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { reducer as modeleReducer } from './modules/cors/ngrx/reducers/modele.reducer';
import { reducer as matriceReducer } from './modules/cors/ngrx/reducers/matrice.reducer';
import { reducer as accueilHistoriqueReducer } from './modules/cors/ngrx/reducers/accueil.historique.reducer';
import { reducer as accueilMatriceReducer } from './modules/cors/ngrx/reducers/accueil.matrice.reducer';
import { reducer as accueilModeleReducer } from './modules/cors/ngrx/reducers/accueil.modele.reducer';

import { EffectsModule } from '@ngrx/effects';
import { MatriceEffects } from './modules/cors/ngrx/effects/matrice.effects';
import { HttpClientModule } from '@angular/common/http';
import { AccueilService } from './modules/cors/services/accueil.service';
import { AccueilEffects } from './modules/cors/ngrx/effects/accueil.effects';
import { ModeleEffects } from './modules/cors/ngrx/effects/modele.effects';

@NgModule({
  declarations: [
    AppComponent
   ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule, 
    HttpClientModule,
    StoreModule.forRoot({
      modele: modeleReducer,
      matrice: matriceReducer,
      matricesAccueil : accueilMatriceReducer,
      modelesAccueil : accueilModeleReducer,
      historiquesAccueil : accueilHistoriqueReducer,      
    }),
    EffectsModule.forRoot([MatriceEffects, AccueilEffects , ModeleEffects])
  ],
 
  providers: [AccueilService],
  bootstrap: [AppComponent]
})
export class AppModule { }
