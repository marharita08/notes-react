import React from 'react';
import Table from "../../components/Table/Table";
import {INote, ITableColumn} from '../../types';
import {FaEdit, FaArchive, FaTrash} from "react-icons/fa";
import {getActive} from "../../services/notesServise";
import {getColumnsByKeys} from "../../services/columnsService";
import {getNoteKeys} from "../../services/keysService";

interface Props {
    notes: INote[],
    deleteNoteHandle: (id: number) => void,
    archiveNoteHandle: (note: INote) => void,
    editNoteHandle: (note: INote) => void
}

const MainPageMainTable: React.FC<Props> = ({notes, editNoteHandle, archiveNoteHandle, deleteNoteHandle}) => {
    const activeNotes: INote[] = getActive(notes);

    const noteColumns: ITableColumn<INote>[] = [
        ...getColumnsByKeys(getNoteKeys()),
        { key: "edit", icon: <FaEdit/>, onclick: editNoteHandle},
        { key: "archive", icon: <FaArchive/>,
            onclick: (note: INote) => archiveNoteHandle(note)},
        { key: "delete", icon: <FaTrash/>,
            onclick: (note: INote) => deleteNoteHandle(note.note_id)}
    ]

    return (
       <Table data={activeNotes} columns={noteColumns} header={"Notes"}/>
    )
}

export default MainPageMainTable;
