import { Component, OnInit, Input } from '@angular/core';
import { element } from '@angular/core/src/render3';
import { MatDialog } from '@angular/material';
import { Store } from '@ngrx/store';
import { ElementFormComponent } from '../modales/element-form/element.form.component';
import * as MatriceActions from '../../cors/ngrx/actions/matrice.action';


@Component({
  selector: 'app-element',
  templateUrl: './element.component.html',
  styleUrls: ['./element.component.css']
})
export class ElementComponent implements OnInit {
  @Input() element
  @Input() idAxe;

  constructor(private elementDialog :MatDialog, private store: Store<any>) { }

  ngOnInit() {
  }
  voirElement (element){  
    console.log("element",element) ;
    this.elementDialog.open(ElementFormComponent,{
      data:{element:element,action:"voir"},
      width:'40%'
    })
  }

  modifierElement(element){
    console.log("element",element) ;
     this.elementDialog.open(ElementFormComponent,{
      data:{idAxe:this.idAxe,element:element,action:"modifier"},
      width:'40%'
    })
  }

  deleteElement(element){
    this.store.dispatch({ type: MatriceActions.DELETE_BYID_ELEMENT, payload: {element:element, idAxe:this.idAxe} });
  }

}
