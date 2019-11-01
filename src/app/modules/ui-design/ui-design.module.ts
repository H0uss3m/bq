import { ModeleCardComponent } from './modele-card/modele-card.component';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { CorsModule } from '../cors/cors.module';
import { MatriceCardComponent } from './matrice-card/matrice-card.component';
import {
  MatSidenavModule,
  MatToolbarModule,
  MatIconModule,
  MatListModule,
  MatButtonModule,
  MatMenuModule,
  MatInputModule,
  MatDialogModule,
  MatGridListModule,
  MatSelectModule,
  MatCardModule
} from '@angular/material';
import { FormsModule } from '@angular/forms';
import { ModalesModule } from './modales/modales.module';
import { AxeComponent } from './axe/axe.component';
import { ElementComponent } from './element/element.component';

const MaterialModules =[
  MatMenuModule,
  MatSidenavModule,
  MatToolbarModule,
  MatIconModule,
  MatListModule,
  MatButtonModule,
  MatCardModule,
  MatInputModule,
  MatDialogModule,
  MatGridListModule,
  MatSelectModule
];
@NgModule({
  declarations: [
    NavbarComponent,
    MatriceCardComponent,
    ModeleCardComponent,
    AxeComponent,
    ElementComponent,
    
  ],
  imports: [
    CommonModule,
    RouterModule,
    CorsModule,
    FormsModule,
    MaterialModules,
    ModalesModule
  ],
  exports : [
    MaterialModules,
    MatriceCardComponent,
    ModeleCardComponent,
    AxeComponent,
    ElementComponent
  ]
})
export class UiDesignModule {
}
