import { createStore }  from 'redux';
import notesReducer from './reducers';
import {IAppState, INoteAction} from "../types";
import {Store} from "@reduxjs/toolkit";
import {DispatchType} from "../types";

const store: Store<IAppState, INoteAction> & { dispatch: DispatchType } = createStore(notesReducer);

export default store;
