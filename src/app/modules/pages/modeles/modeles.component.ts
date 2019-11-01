import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ActivatedRoute } from '@angular/router';
import * as ModeleActions from '../../cors/ngrx/actions/modele.actions';
import { MatDialog } from '@angular/material';
import { CreationTemplateComponent } from '../../ui-design/modales/creation-template/creation-template.component';

@Component({
  selector: 'app-modeles',
  templateUrl: './modeles.component.html',
  styleUrls: ['./modeles.component.css']
})
export class ModelesComponent implements OnInit {

  log = console.log;
  modele;
  id  // nomModele="Modèle example 1"
  constructor(private store: Store<any>, private activatedRoute: ActivatedRoute,private creerAxeDialog:MatDialog) {
    this.modele = store.select('modele')

    // this.id =this.activatedRoute.snapshot.paramMap.get('id');
  }


  ngOnInit() {
     this.store.dispatch({
       type: ModeleActions.GET_BYID_MODELE, payload: {
         description: "",
         nom: "modéle vcvc N°2",
         type: "modele"
       }})
  }
  ajouterAxe(){
this.creerAxeDialog.open(CreationTemplateComponent,{
    width: "487px",
    height: "270px",
    data:{type:'axe'}
    });
    //this.store.dispatch({ type: ModeleActions.ADD_AXE})
  }
  deleteModele = () => {

  }
}
