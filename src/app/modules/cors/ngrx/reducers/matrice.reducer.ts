
import * as MatriceActions from "../actions/matrice.action";
import { Matrice } from '../../../cors/modeles/matrice';

export function reducer(state: Matrice , action) {
  switch (action.type) {
    case MatriceActions.GET_DONE_MATRICE:
    // console.log('action',action.payload)
      return action.payload.template[0];
      // Axe Actions
    case MatriceActions.DELETE_BYID_AXE:
    console.log('action.payload MAtrice',action.payload)

      let newState = state.listAxe.filter(el => el.idAxe !== action.payload);
      return { ...state, listAxe: newState };
    case MatriceActions.ADD_AXE:
      let newAxe = {
        ...state,
        listAxe: [
          ...state.listAxe,
          {
            idAxe: "axe" + (state.listAxe.length + 1).toString(),
            nomAxe: "axe" + (state.listAxe.length + 1).toString(),
            descriptionAxe: "axe" + (state.listAxe.length + 1).toString(),
            listElement: []
          }
        ]
      };
      return newAxe;
      // Element Acrions
      case MatriceActions.UPDATE_BYID_ELEMENT:
      state.listAxe.filter(axe => axe.idAxe === action.payload.idAxe)
          .filter(el => {
              const index = el.listElement
                  .findIndex(x => x.idElement === action.payload.elementUpdate.idElement);
              el.listElement[index] = action.payload.elementUpdate;
          });
      return state;
  case MatriceActions.ADD_ELEMENT_MATRICE:
      state.listAxe[state.listAxe.findIndex(lstaxe => lstaxe.idAxe === action.payload.idAxe)]
          .listElement.push(action.payload.elementUpdate);
      return state;


  case MatriceActions.DELETE_BYID_ELEMENT:         
      return {
          ...state, listAxe: state.listAxe.map(axe => ({
              ...axe, listElement: axe.listElement.filter(e => e.idElement !== action.payload.element.idElement)
          }))
      }
    default:
      return state;
  }
}
