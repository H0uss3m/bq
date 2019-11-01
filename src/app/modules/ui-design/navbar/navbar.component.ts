import { Component, OnInit } from "@angular/core";
import { AccueilService } from "../../cors/services/accueil.service";
import { MatDialog, MatDialogConfig } from "@angular/material";
import { ErreurCreationModeleComponent } from "../modales/erreur-creation-modele/erreur-creation-modele.component";
import { AjouterMatriceFormComponent } from "../modales/ajouter-matrice-form/ajouter-matrice-form.component";
import { Router } from "@angular/router";
import { Store } from "@ngrx/store";
import * as MatriceActions from "../../cors/ngrx/actions/matrice.action";
import { AjouterTemplateFormComponent } from '../modales/ajouter-template-form/ajouter-template-form.component';

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"]
})
export class NavbarComponent implements OnInit {
  searchText: any;
  historique: any[];
  matrices: any[];
  modeles: any[];

  constructor(
    private service: AccueilService,
    public dialog: MatDialog,
    private route: Router,
    private store: Store<any>
  ) {}

  ngOnInit() {
    this.getMatrices();
    this.getModeles();
  }

  getMatrices() {
    this.service.getMatrices().subscribe((matrices: any[]) => {
      this.matrices = matrices;
    });
  }

  getModeles() {
    this.service.getModeles().subscribe((modeles: any[]) => {
      this.modeles = modeles;
    });
  }

  creerModele(): void {
    if (this.modeles.length === 7 ) { 
     this.dialog.open(ErreurCreationModeleComponent,{
       width:'40%',
     });
     }else{
       this.dialog.open(AjouterTemplateFormComponent,{
         width:'490px',
         height:'410px',
         data:{type:'modele'}
       });
     }
  }

  ajouterMatrice() {
    this.dialog.open(AjouterMatriceFormComponent, {
      width: "42%",
      height: "441px"
    });
  }

  visualiserModele(item) {
    this.route.navigateByUrl("/modeles/id/" + btoa(item.id));
  }

  visualiserMatrice(item) {
    this.store.dispatch({
      type: MatriceActions.GET_BYID_MATRICE,
      payload: item.id
    });

    this.route.navigateByUrl("/matrices/id/" + btoa(item.id));
  }
}
