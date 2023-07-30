import React from 'react';
import Table from "../../components/Table/Table";
import { useSelector } from 'react-redux';
import { IAppState, INote, ITableColumn } from '../../types';
import { FiLogOut } from "react-icons/fi";


const MainPageArchiveTable = () => {
    const notes:INote[] = useSelector((state:IAppState) => state.notes);
    const archivedNotes: INote[] = notes.filter((note: INote) => note.archived);
    const noteColumns: ITableColumn<INote>[] = [
        { key: "name", header: "Name" },
        { key: "created", header: "Created"},
        { key: "category", header: "Category"},
        { key: "content", header: "Content"},
        { key: "dates", header: "Dates"},
        { key: "unarchive", icon: <FiLogOut/>},

    ]

    return (
        <Table data={archivedNotes} columns={noteColumns}/>
    )
}

export default MainPageArchiveTable;
