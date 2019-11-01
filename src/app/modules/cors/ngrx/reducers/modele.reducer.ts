import { ElementUpdate } from './../../modeles/matrice';
import { createAction, State, Action } from "@ngrx/store";
import { Modele } from '../../../cors/modeles/modele';
import * as ModeleActions from "../actions/modele.actions";


  // let initialState=
export function reducer(state:Modele , action) {
  switch (action.type) {
    case ModeleActions.GET_DONE_MODELE:
      return action.payload.template[0];
      // Axe Actions
    case ModeleActions.DELETE_BYID_AXE:
      let newState = state.listAxe.filter(el => el.idAxe !== action.payload);
      return { ...state, listAxe: newState };
    case ModeleActions.ADD_AXE:
      console.log("");
      console.log("idAxe : ",action.payload.idAxe,"nomAxe : ",action.payload.nomAxe)
      let newSt = {
        ...state,
        listAxe: [
          ...state.listAxe,
          { couleur:null,
            idAxe: action.payload.idAxe,
            nomAxe: action.payload.nomAxe,
            descriptionAxe: "",
            listElement: []
          }
        ]
      };

      return newSt;
      // Element Actions
      case ModeleActions.UPDATE_BYID_ELEMENT:
      state.listAxe.filter(axe => axe.idAxe === action.payload.idAxe)
          .filter(el => {
              const index = el.listElement
                  .findIndex(x => x.idElement === action.payload.elementUpdate.idElement);
              el.listElement[index] = action.payload.elementUpdate;
          });
      return state;
  case ModeleActions.ADD_ELEMENT_MODELE:
  console.log("action.payload.ElementUpdate",action.payload.elementUpdate)
     let s= state.listAxe[state.listAxe.findIndex(axe => axe.idAxe === action.payload.idAxe)]
           .listElement.push(action.payload.elementUpdate);
          console.log("**state S ***",s)

      //  return s;


  case ModeleActions.DELETE_BYID_ELEMENT:         
      return {
          ...state, listAxe: state.listAxe.map(axe => ({
              ...axe, listElement: axe.listElement.filter(e => e.idElement !== action.payload.element.idElement)
          }))
      }
    default:
      return state;
  }
}
