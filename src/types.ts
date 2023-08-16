import {ReactNode} from 'react';

export interface INote {
    note_id: number,
    name: string,
    created: Date,
    category_id: number,
    content: string,
    dates?: string,
    archived: boolean,
    category: ICategory,
}

export interface INoteToAddOrUpdate {
    name: string,
    category_id: number,
    content: string
}

export interface ICategory {
    category_id: number,
    name: string
}

export interface IAppState {
    notes: INote[],
    categories: ICategory[]
}

interface IAction {
    type: string,
}
export interface INoteAction extends IAction {
    note: INote,
}

export interface ISetNotesAction extends IAction {
    notes: INote[],
}

export interface ISetCategoriesAction extends IAction {
    categories: ICategory[]
}

export interface ITableColumn<T> {
    key: keyof T | string;
    header?: string;
    icon?: ReactNode;
    onclick?: (item: T) => void
}

export interface Summary {
    category: string,
    active: number,
    archived: number
}

export type DispatchType = (args: INoteAction) => INoteAction
