
import { Injectable } from '@angular/core'
import { Action } from '@ngrx/store'

export const GET_MATRICES_ACCUEIL = '[ACCUEIL] Get Matrices'
export const GET_MODELES_ACCUEIL = '[ACCUEIL] Get Modeles'
export const GET_HISTORIQUES_ACCUEIL = '[ACCUEIL] Get Historiques'
export const GET_DONE_MATRICE_ACCUEIL = '[ACCUEIL] Get Done Matrices'
export const GET_DONE_MODELES_ACCUEIL = '[ACCUEIL] Get Done Modeles'
export const GET_DONE_HISTORIQUES_ACCUEIL = '[ACCUEIL] Get Done Historiques'
export const GET_DONE_ACCUEIL = '[ACCUEIL] Get Done'

export class GetMatriceAccueil implements Action {
    readonly type = GET_MATRICES_ACCUEIL
    constructor(public payload: any) { }
}

export class GetModelesAccueil implements Action {
    readonly type = GET_MODELES_ACCUEIL
    constructor(public payload: any) { }
}

export class GetHistoriquesAccueil implements Action {
    readonly type = GET_HISTORIQUES_ACCUEIL
    constructor(public payload: any) { }
}

export type Actions = GetMatriceAccueil |  GetModelesAccueil | GetHistoriquesAccueil