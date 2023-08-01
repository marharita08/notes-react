import React from 'react';
import Table from "../../components/Table/Table";
import {INote, ITableColumn} from '../../types';
import {FiLogOut} from "react-icons/fi";
import {getArchived, unarchiveNote} from "../../services/notesServise";
import {getColumnsByKeys} from "../../services/columnsService";
import {getNoteKeys} from "../../services/keysService";

interface Props {
    notes: INote[],
    unarchiveNoteHandle: (note: INote) => void
}

const MainPageArchiveTable: React.FC<Props> = ({notes, unarchiveNoteHandle}) => {
    const archivedNotes: INote[] = getArchived(notes);

    const noteColumns: ITableColumn<INote>[] = [
        ...getColumnsByKeys(getNoteKeys()),
        { key: "unarchive", icon: <FiLogOut/>, onclick: (note: INote) => unarchiveNoteHandle(unarchiveNote(note))},
    ]

    return (
        <Table data={archivedNotes} columns={noteColumns} header={"Archived Notes"}/>
    )
}

export default MainPageArchiveTable;
