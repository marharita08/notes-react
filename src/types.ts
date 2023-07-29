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

export type DispatchType = (args: INoteAction) => INoteAction
