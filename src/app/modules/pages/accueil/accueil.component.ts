import { Component, OnInit, OnDestroy, AfterViewInit } from "@angular/core";
import { Subject, Observable } from "rxjs";

import { Store } from "@ngrx/store";
import {
  GET_HISTORIQUES_ACCUEIL,
  GET_MODELES_ACCUEIL,
  GET_MATRICES_ACCUEIL
} from "../../cors/ngrx/actions/accueil.action";
declare var $: any;

@Component({
  selector: "app-accueil",
  templateUrl: "./accueil.component.html",
  styleUrls: ["./accueil.component.css"]
})
export class AccueilComponent implements OnInit, OnDestroy {
  carouselOptions = {
    dots: false,
    autoWidth: true,
    nav: true,
    navText: [
      "<div class='nav-btn prev-slide'></div>",
      "<div class='nav-btn next-slide'></div>"
    ],
    responsiveClass: true
  };

  historique: any[];
  matricesListe: any[];
  modelesListe: any[];
  historique$: Observable<any>;
  matricesListe$: Observable<any>;
  modelesListe$: Observable<any>;

  destroy$: Subject<boolean> = new Subject<boolean>();
  constructor(private store: Store<any>) {
    this.historique$ = this.store.select("historiquesAccueil");
    this.matricesListe$ = this.store.select("matricesAccueil");
    this.modelesListe$ = this.store.select("modelesAccueil");
  }

  ngOnInit() {
    this.store.dispatch({ type: GET_HISTORIQUES_ACCUEIL });
    this.store.dispatch({ type: GET_MODELES_ACCUEIL });
    this.store.dispatch({ type: GET_MATRICES_ACCUEIL });
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
}
