import React from 'react';
import Table from "../../components/Table/Table";
import {INote, ITableColumn} from '../../types';
import {FaEdit, FaArchive, FaTrash} from "react-icons/fa";
import {archiveNote, getActive} from "../../services/notesServise";
import {getColumnsByKeys} from "../../services/columnsService";
import {getNoteKeys} from "../../services/keysService";
import {useDispatch} from "react-redux";
import {deleteNote, editNote} from "../../redux/actions";

interface Props {
    notes: INote[]
}

const MainPageMainTable: React.FC<Props> = ({notes}) => {
    const dispatch = useDispatch();
    const activeNotes: INote[] = getActive(notes);

    const deleteNoteHandle = (note: INote) => {
        dispatch(deleteNote(note));
    }

    const archiveNoteHandle = (note: INote) => {
        const archivedNote = archiveNote(note);
        dispatch(editNote(archivedNote));
    }

    const noteColumns: ITableColumn<INote>[] = [
        ...getColumnsByKeys(getNoteKeys()),
        { key: "edit", icon: <FaEdit/>},
        { key: "archive", icon: <FaArchive/>, onclick: archiveNoteHandle},
        { key: "delete", icon: <FaTrash/>, onclick: deleteNoteHandle}
    ]

    return (
       <Table data={activeNotes} columns={noteColumns}/>
    )
}

export default MainPageMainTable;
