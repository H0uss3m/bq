import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AjouterMatriceFormComponent } from './ajouter-matrice-form/ajouter-matrice-form.component';
import { ErreurCreationModeleComponent } from './erreur-creation-modele/erreur-creation-modele.component';
import { 
  MatIconModule, 
  MatInputModule, 
  MatGridListModule, 
  MatSelectModule,
  MatDialogModule, 
  MatDividerModule, 
  MatButtonModule, 
  MatCardModule 
} from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AjouterTemplateFormComponent } from './ajouter-template-form/ajouter-template-form.component';
import { CreationTemplateComponent } from './creation-template/creation-template.component';
import { ElementFormComponent } from './element-form/element.form.component';


@NgModule({
  declarations: [
    AjouterMatriceFormComponent,
    ErreurCreationModeleComponent,
    ElementFormComponent,
    AjouterTemplateFormComponent,
    CreationTemplateComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatInputModule,
    MatGridListModule,
    MatSelectModule,
    MatDialogModule,
    MatDividerModule,
    MatButtonModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule
  ],
  entryComponents: 
  [
    ErreurCreationModeleComponent,
    AjouterMatriceFormComponent,
    ElementFormComponent,
    AjouterTemplateFormComponent,
    CreationTemplateComponent
  ]
})
export class ModalesModule { }
