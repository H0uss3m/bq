import { Component, OnInit, Inject } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material";
import { Store } from "@ngrx/store";
import * as MatriceActions from "../../../cors/ngrx/actions/matrice.action";
import * as ModeleActions from "../../../cors/ngrx/actions/modele.actions";

import { v4 as uuid } from "uuid";

@Component({
  selector: "app-element-form",
  templateUrl: "./element.form.component.html",
  styleUrls: ["./element.form.component.css"]
})
export class ElementFormComponent implements OnInit {
  elementForm: FormGroup;
  titleModal: string;
  idAxe: string;
  type="modele";
  constructor(
    public matDialog: MatDialogRef<ElementFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private store: Store<any>
  ) {
    //this.type ="modele";
     this.idAxe = data.idAxe;
      console.log("data " ,data);
    this.store.select(this.type);

    if (data.element) {
      this.elementForm = new FormGroup({
        idElement: new FormControl(data.element.idElement),
        nomElement: new FormControl(data.element.nomElement, [
          Validators.required
        ]),
        descriptionElement: new FormControl(data.element.descriptionElement),
        correlation: new FormControl(data.element.correlation),
        ponderationRef: new FormControl(data.element.ponderationRef),
        ponderationRes: new FormControl(data.element.ponderationRes),
        valFinale: new FormControl(data.element.valFinale),
        valInitial: new FormControl(data.element.valInitial)
      });
    } else if (!data.element && (data.action = "ajouter")) {
      let uidElement = uuid();
      this.elementForm = new FormGroup({
        idElement: new FormControl(uidElement),
        nomElement: new FormControl("", [Validators.required]),
        descriptionElement: new FormControl(""),
        correlation: new FormControl(""),
        ponderationRef: new FormControl("", [
          Validators.max(5),
          Validators.min(1)
        ]),
        ponderationRes: new FormControl(""),
        valFinale: new FormControl(""),
        valInitial: new FormControl("")
      });
    }
  }

  ngOnInit() {
    this.checkAction();
  }

  checkAction() {
    if (this.data.action === "voir") {
      this.titleModal = "Voir l'élément";
      this.elementForm.controls["nomElement"].disable();
      this.elementForm.controls["descriptionElement"].disable();
      this.elementForm.controls["correlation"].disable();
      this.elementForm.controls["ponderationRef"].disable();
      this.elementForm.controls["ponderationRes"].disable();
      this.elementForm.controls["valFinale"].disable();
      this.elementForm.controls["valInitial"].disable();
    } else if (this.data.action === "modifier") {
      this.titleModal = "Modifier l'élément";
    } else {
      this.titleModal = "Ajouter Elément";
    }
  }

  enregistrer() {
    if (this.elementForm.invalid) {
      return;
    }
    let elementUpdate = {
      idElement: this.elementForm.controls["idElement"].value,
      nomElement: this.elementForm.controls["nomElement"].value,
      descriptionElement: this.elementForm.controls["descriptionElement"].value,
      correlation: this.elementForm.controls["correlation"].value,
      ponderationRef: this.elementForm.controls["ponderationRef"].value,
      ponderationRes: this.elementForm.controls["ponderationRes"].value,
      valFinale: this.elementForm.controls["valFinale"].value,
      valInitial: this.elementForm.controls["valInitial"].value
    };
    if (this.data.action === "modifier") {
      this.modifierElement(this.idAxe, elementUpdate);
    } else {
      this.ajoutElement(this.idAxe, elementUpdate);
    }
  }

  close() {
    this.matDialog.close();
  }

  modifierElement(idAxe, elementUpdate) {
    if (this.type === "matrice") {
      this.store.dispatch({
        type: MatriceActions.UPDATE_BYID_ELEMENT,
        payload: { elementUpdate, idAxe }
      });
    } else {
      console.log("type :: ", this.type);
      this.store.dispatch({
        type: ModeleActions.UPDATE_BYID_ELEMENT,
        payload: { elementUpdate, idAxe }
      });
    }
    this.close();
  }

  ajoutElement(idAxe, elementUpdate) {
    console.log("type :: ", this.type);
    if (this.type === "matrice") {
      this.store.dispatch({
        type: MatriceActions.ADD_ELEMENT_MATRICE,
        payload: { elementUpdate, idAxe }
      });
    } else {
      this.store.dispatch({
        type: ModeleActions.ADD_ELEMENT_MODELE,
        payload: { elementUpdate, idAxe }
      });
    }
    this.close();
  }
}
