import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import * as MatriceActions from '../../cors/ngrx/actions/matrice.action';
import { Observable } from 'rxjs';
import { Matrice } from '../../cors/modeles/matrice';
@Component({
  selector: 'app-matrice',
  templateUrl: './matrice.component.html',
  styleUrls: ['./matrice.component.css']
})
export class MatriceComponent implements OnInit {
  matrice: Observable<Matrice>;
  id;
  log=console.log
  constructor(private store:Store<any>,private activatedRoute:ActivatedRoute) { 
    this.matrice = store.select('matrice')  
    this.id = atob(this.activatedRoute.snapshot.paramMap.get('id'));
  }
  
  ngOnInit() {
this.matrice.subscribe(data=>{
  console.log("data:::::",data);
})

    this.store.dispatch({ type: MatriceActions.GET_BYID_MATRICE, payload: {  id:"288ea36c-784a-4a8c-926a-c08c82fc1abf",
      body:{
        description: "hello in matrice",
        nom: "matriscedd szszsz 21",
        type: "matrice"
      }
    }})
  }
  ajouterAxe(){
    this.store.dispatch({ type: MatriceActions.ADD_AXE})
  }
}
