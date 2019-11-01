import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModelesComponent } from './modeles.component';
import { UiDesignModule } from '../../ui-design/ui-design.module';
import { NavbarComponent } from '../../ui-design/navbar/navbar.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ModelesComponent],
  imports: [
    CommonModule,
    UiDesignModule,
    RouterModule.forChild([
      {
        path: 'id', component: NavbarComponent, children: [
           { path:':id', component:ModelesComponent}
        ]
      },
    ])
  ]
})
export class ModelesModule { }
