import { MatriceService } from "./../../services/matrice.service";
import { Injectable } from "@angular/core";
import { Actions, ofType, Effect } from "@ngrx/effects";
import { EMPTY } from "rxjs";
import { map, mergeMap, catchError } from "rxjs/operators";
import * as ActionsMatrice from "../actions/matrice.action";

@Injectable()
export class MatriceEffects {
 
  @Effect()
  loadMatriceById$ = this.actions$.pipe(
    ofType(ActionsMatrice.GET_BYID_MATRICE),
    mergeMap((data: any) =>
      this.matriceService.getByIdMatrice(data.payload.id,data.payload.body).pipe(
        map(result => ({
          type: ActionsMatrice.GET_DONE_MATRICE,
          payload: result
        })),
        catchError(() => EMPTY)
      )
    )
  );

  constructor(
    private actions$: Actions,
    private matriceService: MatriceService
  ) {}
}
