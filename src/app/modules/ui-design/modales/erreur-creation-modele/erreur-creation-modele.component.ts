import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-erreur-creation-modele',
  templateUrl: './erreur-creation-modele.component.html',
  styleUrls: ['./erreur-creation-modele.component.css']
})
export class ErreurCreationModeleComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ErreurCreationModeleComponent>) { }

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}