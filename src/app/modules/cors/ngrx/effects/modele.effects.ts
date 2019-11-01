import { ModeleService } from "./../../services/modele.service";
import { Injectable } from "@angular/core";
import { Actions, ofType, Effect } from "@ngrx/effects";
import { EMPTY } from "rxjs";
import { map, mergeMap, catchError } from "rxjs/operators";
import * as ActionsModele from "../actions/modele.actions";

@Injectable()
export class ModeleEffects {

  @Effect()
  loadModeleById$ = this.actions$.pipe(
    ofType(ActionsModele.GET_BYID_MODELE),
    mergeMap((data: any) =>

      this.modeleService.getByIdModeleById(data.payload).pipe(
        map(result => ({
          type: ActionsModele.GET_DONE_MODELE,
          payload: result
        })),
        catchError(() => EMPTY)
      )
    )
  );

  constructor(
    private actions$: Actions,
    private modeleService: ModeleService
  ) {}
}
