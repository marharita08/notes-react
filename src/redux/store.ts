import {applyMiddleware, createStore} from 'redux';
import notesReducer from './reducers';
import thunkMiddleware from 'redux-thunk';
import {IAppState, INoteAction, ISetCategoriesAction, ISetNotesAction} from "../types";
import {Store} from "@reduxjs/toolkit";
import {DispatchType} from "../types";

const store: Store<IAppState, INoteAction|ISetNotesAction|ISetCategoriesAction> & { dispatch: DispatchType } = createStore(notesReducer, applyMiddleware(thunkMiddleware));

export default store;
