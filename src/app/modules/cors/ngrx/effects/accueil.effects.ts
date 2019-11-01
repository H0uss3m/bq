import { Injectable } from '@angular/core';
import { Actions, ofType, Effect } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { AccueilService } from '../../services/accueil.service';
import * as ActionsAccueil from "../actions/accueil.action";
import { GET_HISTORIQUES_ACCUEIL, GET_MATRICES_ACCUEIL, GET_MODELES_ACCUEIL } from '../actions/accueil.action';

@Injectable()
export class AccueilEffects {

  @Effect()
  loadAccueilMatrices$ = this.actions$.pipe(
    ofType(GET_MATRICES_ACCUEIL),
    mergeMap(() => this.accueilService.getMatrices()
      .pipe(
        map(data => ({ type: ActionsAccueil.GET_DONE_MATRICE_ACCUEIL, payload: data })),
        catchError(() => EMPTY)
      ))
  );

  @Effect()
  loadAccueilModeles$ = this.actions$.pipe(
    ofType(GET_MODELES_ACCUEIL),
    mergeMap(() => (this.accueilService.getModeles()
      .pipe(
        map(result => ({ type: ActionsAccueil.GET_DONE_MODELES_ACCUEIL, payload: result })),
        catchError(() => EMPTY)
      ))
    ));

  @Effect()
  loadAccueilHistoriques$ = this.actions$.pipe(
    ofType(GET_HISTORIQUES_ACCUEIL),
    mergeMap(() => this.accueilService.getHistorique()
      .pipe(
        map(result => ({ type: ActionsAccueil.GET_DONE_HISTORIQUES_ACCUEIL, payload: result })),
        catchError(() => EMPTY)
      ))
  );

  constructor(
    private actions$: Actions,
    private accueilService: AccueilService
  ) { }
}