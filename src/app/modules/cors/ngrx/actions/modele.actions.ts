import { Injectable } from "@angular/core";
import { Action } from "@ngrx/store";

export const GET_ALL_MODELE = "[MODELE] Get All";
export const GET_BYID_MODELE = "[MODELE]  Get By Id";
export const GET_DONE_MODELE = "[MODELE]  Get Done";
export const DELETE_BYID_AXE = "[MODELE] delete Axe By Id ";
export const ADD_AXE = "[AXE] add MODELE";
export const UPDATE_BYID_ELEMENT ='[MODELE] UPDATE ELEMENT BY ID';
export const ADD_ELEMENT_MODELE='[MODELE] ADD ELEMENT ';
export const DELETE_BYID_ELEMENT='[MODELE] DELETE ELEMENT BY ID';
export class AddAllModele implements Action {
  readonly type = GET_ALL_MODELE;
  constructor(public payload: any) {}
}

export class GetByIdModele implements Action {
  readonly type = GET_BYID_MODELE;
  constructor(public payload: any) {}
}
// Axe Actions
export class DataModele implements Action {
  readonly type = GET_DONE_MODELE;
  constructor(public payload: any) {}
}

export class DeleteAxeById implements Action {
  readonly type = DELETE_BYID_AXE;
  constructor(public payload: any) {}
}
export class AddAxe implements Action {
  readonly type=ADD_AXE;
  
}
// Element Actions
export class UpdateByIdElement implements Action {
  readonly type=UPDATE_BYID_ELEMENT
  constructor (public payload: any){}
}

export class AddElementMatrice implements Action {
  readonly type=ADD_ELEMENT_MODELE
  constructor(public payload:any){}
}

export class DeleteByIdElement implements Action {
  readonly type=DELETE_BYID_ELEMENT
  constructor (public payload:any){}
}
export type Actions = AddAllModele | GetByIdModele | DataModele | DeleteAxeById |AddAxe;
