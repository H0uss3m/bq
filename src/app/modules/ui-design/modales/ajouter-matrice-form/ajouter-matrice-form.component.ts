import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { AccueilService } from 'src/app/modules/cors/services/accueil.service';
import { MatDialogRef, MatDialog } from '@angular/material/dialog';
import { AjouterTemplateFormComponent } from '../ajouter-template-form/ajouter-template-form.component';
export interface ListItem {
  title: string;
  icon: string;
}
@Component({
  selector: 'app-ajouter-matrice-form',
  templateUrl: './ajouter-matrice-form.component.html',
  styleUrls: ['./ajouter-matrice-form.component.css']
})
export class AjouterMatriceFormComponent implements OnInit  , OnDestroy {


  matrices = [];
  destroy$: Subject<boolean> = new Subject<boolean>();
  listItem: ListItem[] = [
    {title: 'A partir d\'une matrice', icon: 'home'},
    {title: 'A partir d\'un modèle', icon: 'home'}
  ];
  selectedItem = this.listItem[1];
  showListMatrice = true;
  showListModele = false;
  modeles: any[];

  public form = {
    idMatrice: '0',
    idModele: '0'
  }
  constructor(private service: AccueilService, public dialogRef: MatDialogRef<AjouterMatriceFormComponent>,public dialog: MatDialog) { }

  ngOnInit() {
    this.getMatrices();
    this.getModeles();
  }
  getModeles() {
    this.service.getMatrices().pipe(takeUntil(this.destroy$)).subscribe(
      (data: any[]) => {
      this.matrices = data;
});
  }
  getMatrices() {
    this.service.getModeles().pipe(takeUntil(this.destroy$)).subscribe(
      (data: any[]) => {
      this.modeles = data;
});
  }
  onClose(): void {
    this.dialogRef.close();
    this.dialogRef.removePanelClass('mat-dialo');
  }

  creerMatrice() {
    this.onClose();
    this.dialog.open(AjouterTemplateFormComponent,{
      width : '490px',
      height : '410px',
      data: { type: 'matrice', elementId: (this.form.idMatrice !== '0') ? this.form.idMatrice : this.form.idModele }
    });
   }
changeList(value) {
  if (value === '0') {
  this.showListMatrice = true;
  this.showListModele = false;
  } else {
    this.showListMatrice = false;
    this.showListModele = true;
  }
}

  ngOnDestroy(): void {
    this.destroy$.next(true);
    // Unsubscribe from the subject
    this.destroy$.unsubscribe();
  }

}
