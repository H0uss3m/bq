import { Injectable } from "@angular/core";
import { Action } from "@ngrx/store";

export const GET_ALL_MATRICE = "[MATRICE] Get All";
export const GET_BYID_MATRICE = "[MATRICE]  Get By Id";
export const GET_DONE_MATRICE = "[MATRICE]  Get Done";
export const DELETE_BYID_AXE = "[MATRICE] delete Axe By Id" ;
export const ADD_AXE = "[AXE] add MATRICE";
export const UPDATE_BYID_ELEMENT ='[MATRICE] UPDATE ELEMENT BY ID';
export const ADD_ELEMENT_MATRICE='[MATRICE] ADD ELEMENT ';
export const DELETE_BYID_ELEMENT='[MATRICE] DELETE ELEMENT BY ID';
export class AddAllMatrice implements Action {
  readonly type = GET_ALL_MATRICE;
  constructor(public payload: any) {}
}

export class GetByIdMatrice implements Action {
  readonly type = GET_BYID_MATRICE;
  constructor(public payload: any) {}
}

export class DataMatrice implements Action {
  readonly type = GET_DONE_MATRICE;
  constructor(public payload: any) {}
}
// Axe Actions
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
  readonly type= ADD_ELEMENT_MATRICE
  constructor(public payload:any){}
}

export class DeleteByIdElement implements Action {
  readonly type=DELETE_BYID_ELEMENT
  constructor (public payload:any){}
}
export type Actions = AddAllMatrice | GetByIdMatrice | DataMatrice | DeleteAxeById |AddAxe;
