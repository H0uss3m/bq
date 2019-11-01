import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-modele-card',
  templateUrl: './modele-card.component.html',
  styleUrls: ['./modele-card.component.scss']
})
export class ModeleCardComponent implements OnInit {
  @Input() nomModele: string;
  @Input() dateDeModification: string;
  constructor() { }

  ngOnInit() {
  }

}
