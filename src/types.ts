import {ReactNode} from 'react';

export interface INote {
    id: number,
    name: string,
    created: string,
    category: string,
    content: string,
    dates: string,
    archived: boolean,
}

export interface IAppState {
    notes: INote[],
}

export interface INoteAction {
    type: string,
    note: INote,
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
