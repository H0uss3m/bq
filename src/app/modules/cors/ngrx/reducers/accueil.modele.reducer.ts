import { createAction, State, Action } from "@ngrx/store";

import * as AccueilActions from "../actions/accueil.action";

export function reducer(state: State<any> | [], action) {
  switch (action.type) {
    case AccueilActions.GET_DONE_MODELES_ACCUEIL:
      return action.payload;
    default:
      return state;
  }
}
