import { Component, OnInit, Inject } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";
import { Store } from "@ngrx/store";
import * as MatriceActions from "../../../cors/ngrx/actions/matrice.action";

import * as ModeleActions from "../../../cors/ngrx/actions/modele.actions";
import { element } from "protractor";

@Component({
  selector: "app-ajouter-template-form",
  templateUrl: "./ajouter-template-form.component.html",
  styleUrls: ["./ajouter-template-form.component.css"]
})
export class AjouterTemplateFormComponent implements OnInit {
  dataTemplate: any;
  ajoutForm: FormGroup;
  elementId: string;
  type: string;
  modele:any;
  log=console.log;
  constructor(private store: Store<any>,public dialogRef: MatDialogRef<AjouterTemplateFormComponent>,@Inject(MAT_DIALOG_DATA) public data: any) {

    this.modele = store.select('modele')

    this.ajoutForm = new FormGroup({
      nom: new FormControl("", [Validators.required]),
      description: new FormControl("")
    });
    this.type = data.type;
    if (data.type === "matrice") {
      this.dataTemplate = {
        titleAjoutTemplate: "Créer une matrice",
        inputNom: "NOM DE LA MATRICE",
        placeholderNom: "Décrivez la matrice",
        inputDescription: "DESCRIPTION (optionnel)",
        placeholderDescription: "Décrivez la matrice"
      };
    } else {
      this.dataTemplate = {
        titleAjoutTemplate: "Créer une modéle",
        inputNom: "NOM DE MODELE",
        placeholderNom: "Décrivez le modéle",
        inputDescription: "DESCRIPTION (optionnel)",
        placeholderDescription: "Décrivez le modéle"
      };
    }

    this.elementId = data.elementId;
  }
  ngOnInit() {
  }

  onClose(): void {
    this.dialogRef.close();
    this.dialogRef.removePanelClass("mat-dialo");
  }

  btnCreer() {
    if (this.type === "matrice") {
      this.store.dispatch({
        type: MatriceActions.GET_BYID_MATRICE,
        payload: { id: this.elementId, body: this.ajoutForm.value }
      });
      console.log("form value = ", this.ajoutForm.value);
      console.log("elementId = ", this.elementId);
    } else {
      this.store.dispatch({
        type: ModeleActions.GET_BYID_MODELE,
        payload: {nom:this.ajoutForm.value.nom,description:this.ajoutForm.value.description,type:'modele'}
      });

      console.log("form value = ", {nom:this.ajoutForm.value.nom,description:this.ajoutForm.value.description,type:'modele'});
    }
  }
}
