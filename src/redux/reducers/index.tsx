import IAction from '../../types/action';
import IStore from '../../types/store';
import {UPDATE_INPUT_TEXT, RECOMPUTE_OUTPUT, UPDATE_SETTINGS} from '../actions'
import convert from '../../util/convert';

const defaultInitialState: IStore = {
  input: '',
  settings: {
    mode: 'alternating',
    ignoreCrud: true,
  },
  output: ''
};
const root = (state: IStore=defaultInitialState, action: IAction) => {
 switch (action.type) {
   case UPDATE_INPUT_TEXT:
     return {
       ...state,
       input: action.payload.newText,
       output: convert(action.payload.newText, state.settings)
     };
   case UPDATE_SETTINGS:
     return {
       ...state,
       settings: action.payload.newSettings
     };
   case RECOMPUTE_OUTPUT:
     return {
       ...state,
       output: convert(state.input, state.settings)
     };
   default:
    return state
 }
};

export default root;