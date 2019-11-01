import { Component, OnInit, Input } from "@angular/core";
import { Store } from "@ngrx/store";
import { MatDialog } from '@angular/material';
import { ElementFormComponent } from '../modales/element-form/element.form.component';

import * as MatriceActions from "../../cors/ngrx/actions/matrice.action";
import * as ModeleActions from "../../cors/ngrx/actions/modele.actions";
import { CreationTemplateComponent } from '../modales/creation-template/creation-template.component';

@Component({
  selector: "app-axe",
  templateUrl: "./axe.component.html",
  styleUrls: ["./axe.component.css"]
})
export class AxeComponent implements OnInit {
  @Input() listeAxes;
  @Input() type;
  log = console.log;
  constructor(private dialog:MatDialog,private store:Store<any>) {}

  ngOnInit() {
    console.log('type',this.type)
  }
  ajoutElement(idAxe){
    this.dialog.open(ElementFormComponent,{      
      data:{type:this.type,idAxe:idAxe,action:"ajouter"},
      width:'40%'
    })
  }


  deleteAxeById(id) {
   (this.type === "matrice") ?
      this.store.dispatch({
        type: MatriceActions.DELETE_BYID_AXE,
        payload: id
      })
    :  this.store.dispatch({
        type: ModeleActions.DELETE_BYID_AXE,
        payload: id
      });
    
  }

  renomerAxe(nomAxe){
    console.log("renomer",nomAxe);
    this.dialog.open(CreationTemplateComponent,{
      width: "487px",
      height: "270px",
      data:{nomAxe:nomAxe, type:'renomer'}
    })
  }


}
