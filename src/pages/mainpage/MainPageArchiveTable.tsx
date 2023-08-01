import React from 'react';
import Table from "../../components/Table/Table";
import {INote, ITableColumn} from '../../types';
import {FiLogOut} from "react-icons/fi";
import {getArchived, unarchiveNote} from "../../services/notesServise";
import {getColumnsByKeys} from "../../services/columnsService";
import {getNoteKeys} from "../../services/keysService";
import {editNote} from "../../redux/actions";
import {useDispatch} from "react-redux";

interface Props {
    notes: INote[]
}

const MainPageArchiveTable: React.FC<Props> = ({notes}) => {
    const dispatch = useDispatch();
    const archivedNotes: INote[] = getArchived(notes);

    const unarchiveNoteHandle = (note: INote) => {
        const unarchivedNote = unarchiveNote(note);
        dispatch(editNote(unarchivedNote));
    }

    const noteColumns: ITableColumn<INote>[] = [
        ...getColumnsByKeys(getNoteKeys()),
        { key: "unarchive", icon: <FiLogOut/>, onclick: unarchiveNoteHandle},
    ]

    return (
        <Table data={archivedNotes} columns={noteColumns}/>
    )
}

export default MainPageArchiveTable;
