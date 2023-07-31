import React from 'react';
import Table from "../../components/Table/Table";
import { INote, ITableColumn } from '../../types';
import { FiLogOut } from "react-icons/fi";
import { getArchived } from "../../services/notesServise";
import { getColumnsByKeys } from "../../services/columnsService";
import { getNoteKeys } from "../../services/keysService";

interface Props {
    notes: INote[]
}

const MainPageArchiveTable: React.FC<Props> = ({notes}) => {
    const archivedNotes: INote[] = getArchived(notes);
    const noteColumns: ITableColumn<INote>[] = [
        ...getColumnsByKeys(getNoteKeys()),
        { key: "unarchive", icon: <FiLogOut/>},
    ]

    return (
        <Table data={archivedNotes} columns={noteColumns}/>
    )
}

export default MainPageArchiveTable;
