import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatriceComponent } from './matrice.component';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from '../../ui-design/navbar/navbar.component';
import { UiDesignModule } from '../../ui-design/ui-design.module';

@NgModule({
  declarations: [MatriceComponent],
  imports: [
    CommonModule,
    UiDesignModule,
    RouterModule.forChild([
      {
        path: 'id', component: NavbarComponent, children: [
          { path: ':id', pathMatch:'full', component: MatriceComponent },
        ]
      },
    ])
  ] 
})
export class MatriceModule { }
