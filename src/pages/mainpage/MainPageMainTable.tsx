import React from 'react';
import Table from "../../components/Table/Table";
import { useSelector } from 'react-redux';
import { IAppState, INote, ITableColumn } from '../../types';
import { FaEdit, FaArchive, FaTrash } from "react-icons/fa";


const MainPageMainTable = () => {
    const notes:INote[] = useSelector((state:IAppState) => state.notes);
    const activeNotes: INote[] = notes.filter((note: INote) => !note.archived);
    const noteColumns: ITableColumn<INote>[] = [
        { key: "name", header: "Name" },
        { key: "created", header: "Created"},
        { key: "category", header: "Category"},
        { key: "content", header: "Content"},
        { key: "dates", header: "Dates"},
        { key: "edit", icon: <FaEdit/>},
        { key: "archive", icon: <FaArchive/>},
        { key: "delete", icon: <FaTrash/>}
    ]

    return (
       <Table data={activeNotes} columns={noteColumns}/>
    )
}

export default MainPageMainTable;
