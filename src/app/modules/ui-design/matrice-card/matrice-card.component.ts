import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-matrice-card',
  templateUrl: './matrice-card.component.html',
  styleUrls: ['./matrice-card.component.css']
})
export class MatriceCardComponent implements OnInit {
  @Input() nomMatrice: string;
  @Input() dateDeModification: string;

  constructor() { }

  ngOnInit() {
  }

}
