import React, {useState} from 'react';
import MainPageMainTable from "./MainPageMainTable";
import MainPageArchiveTable from "./MainPageArchiveTable";
import {IAppState, INote} from "../../types";
import {useDispatch, useSelector} from "react-redux";
import MainPageSummaryTable from "./MainPageSummaryTable";
import ButtonWithIcon from "../../components/ButtonWithIcon/ButtonWithIcon";
import {FaArchive, FaPlus} from "react-icons/fa";
import MainPageAddEditNoteModal from "./MainPageAddEditNoteModal";
import {addNote, deleteNote, editNote} from "../../redux/actions";

const MainPage = () => {
    const dispatch = useDispatch();
    const notes:INote[] = useSelector((state:IAppState) => state.notes);
    const [isArchiveVisible, setArchiveVisible] = useState(false);
    const [isAddEditModalOpen, setAddEditModalOpen] = useState(false);
    const [noteToEdit, setNoteToEdit] = useState<INote | null>(null);

    const openCloseArchiveHandle = () => {
        setArchiveVisible(!isArchiveVisible);
    }

   const openModalToEdit = (note: INote) => {
        setNoteToEdit(note);
        setAddEditModalOpen(true);
   }

   const openModalToAdd = () => {
        setNoteToEdit(null);
        setAddEditModalOpen(true);
   }

   const closeModal = () => {
        setAddEditModalOpen(false);
   }

    const addNoteHandle = (note: INote) => {
        dispatch(addNote(note));
    }

    const updateNoteHandle = (note: INote) => {
        dispatch(editNote(note));
    }

    const deleteNoteHandle = (note: INote) => {
        dispatch(deleteNote(note));
    }

    return (
        <>
            <div className={"my-5 mx-auto w-19/20 md:w-5/6 overflow-x-auto"}>
                <MainPageMainTable notes={notes}
                                   editNoteHandle={openModalToEdit}
                                   archiveNoteHandle={updateNoteHandle}
                                   deleteNoteHandle={deleteNoteHandle}/>
            </div>
            <div className={"my-5 mx-auto w-19/20 md:w-5/6 flex justify-end"}>
                <ButtonWithIcon text={isArchiveVisible?"Close Archive":"Open Archive"}
                                icon={<FaArchive/>}
                                onclick={openCloseArchiveHandle}/>
                <ButtonWithIcon text={"Add Note"} icon={<FaPlus/>} onclick={openModalToAdd}/>
            </div>
            {isArchiveVisible && <div className={"my-5 mx-auto w-19/20 md:w-5/6 overflow-x-auto"}>
                 <MainPageArchiveTable notes={notes} unarchiveNoteHandle={updateNoteHandle}/>
            </div>}
            <div className={"my-5 mx-auto w-19/20 md:w-5/6"}>
                <MainPageSummaryTable notes={notes}/>
            </div>
            <MainPageAddEditNoteModal isOpen={isAddEditModalOpen}
                                      onClose={closeModal}
                                      noteToEdit={noteToEdit}
                                      onUpdate={updateNoteHandle}
                                      onAdd={addNoteHandle}/>
        </>
    )
}

export default MainPage;
