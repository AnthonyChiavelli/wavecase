import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/';
import IStore from '../types/store';


const defaultInitialState: IStore = {
  input: '',
  settings: {
    mode: 'alternating',
    ignoreCrud: true
  },
  output: ''
};

export default function configureStore(initialState=defaultInitialState) {
 return createStore(
    rootReducer,
    initialState,
    applyMiddleware(thunk)
 );
}