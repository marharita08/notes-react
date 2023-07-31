import React from 'react';
import Table from "../../components/Table/Table";
import { INote, ITableColumn } from '../../types';
import { FaEdit, FaArchive, FaTrash } from "react-icons/fa";
import { getActive } from "../../services/notesServise";
import { getColumnsByKeys } from "../../services/columnsService";
import { getNoteKeys } from "../../services/keysService";

interface Props {
    notes: INote[]
}

const MainPageMainTable: React.FC<Props> = ({notes}) => {
    const activeNotes: INote[] = getActive(notes);
    const noteColumns: ITableColumn<INote>[] = [
        ...getColumnsByKeys(getNoteKeys()),
        { key: "edit", icon: <FaEdit/>},
        { key: "archive", icon: <FaArchive/>},
        { key: "delete", icon: <FaTrash/>}
    ]

    return (
       <Table data={activeNotes} columns={noteColumns}/>
    )
}

export default MainPageMainTable;
