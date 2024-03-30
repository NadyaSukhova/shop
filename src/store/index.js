import { combineReducers, createStore } from "redux";
import {default as goods} from "./goods/reducer";
import {default as cart} from "./cart/reducer";
import {default as language} from "./language/reducer";
import {default as favorites} from './favorites/reducer';

const rootReduser = combineReducers({goods: goods, cart: cart, lang:language, favorite: favorites})
export const store=createStore(rootReduser)