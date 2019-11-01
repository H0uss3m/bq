export interface Matrice {
    id: string;
    nom: string;
    type: string;
    description: string;
    listAxe: ListAxe[];
}

export interface ListAxe {
    idAxe: string;
    nomAxe: string;
    descriptionAxe: string;
    listElement: ListElement[];
}


export interface ListElement {
    idElement: string;
    nomElement: string;
    descriptionElement: string;
    correlation: number;
    ponderationRef: number;
    ponderationRes: number;
    valInitial: number;
    valFinale: number;
    listLien: ListLien[];
}
export interface ListLien {
    idElement: string;
    descriptionRelation: string;
}


export interface ElementUpdate {
    idElement: string;
    nomElement: string;
    descriptionElement: string;
    correlation: number;
    ponderationRef: number;
    ponderationRes: number;
    valInitial: number;
    valFinale: number;
    listLien: ListLien[];
}

