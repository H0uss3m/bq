import { Component, OnInit,Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { MatDialogRef,MAT_DIALOG_DATA } from '@angular/material';
import * as ModeleActions from "../../../cors/ngrx/actions/modele.actions";
import { environment } from 'src/environments/environment';

import { v4 as uuid } from "uuid";
@Component({
  selector: 'app-creation-template',
  templateUrl: './creation-template.component.html',
  styleUrls: ['./creation-template.component.css']
})
export class CreationTemplateComponent implements OnInit {
  dataTemplate: any;
  createForm: FormGroup;
  elementId: string;
  type: string;
  modele:any;
  log=console.log;
  constructor(private store: Store<any>,public dialogRef: MatDialogRef<CreationTemplateComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
      this.store.select ('matrice'); 
      this.createForm = new FormGroup({
        nom: new FormControl("", [Validators.required])
      });
      this.type = data.type;
      if (data.type === "renomer") {
        this.dataTemplate = {
          titleAjoutTemplate: "Rénomer un axe",
          inputNom: "NOM DE L'AXE",
          ValueNom:data.nomAxe
        };
      } else {
        this.dataTemplate = {
          titleAjoutTemplate: "Créer un axe",
          inputNom: "NOM DE L'AXE",
          placeholderNom:"Nommez l'axe"
        };
      }
    }


    onClose(): void {
      this.dialogRef.close();
      this.dialogRef.removePanelClass("mat-dialo");
    }

    enregistrerAxe(){
      

      console.log(this.createForm.controls["nom"].value);
      let idAxe = uuid();
      this.store.dispatch({type:ModeleActions.ADD_AXE,payload:
        {idAxe:idAxe,nomAxe:this.createForm.controls["nom"].value}})
    }

  ngOnInit() {
  }

}
