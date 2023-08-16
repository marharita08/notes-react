import React, {useEffect, useState} from 'react';
import MainPageMainTable from "./MainPageMainTable";
import MainPageArchiveTable from "./MainPageArchiveTable";
import {IAppState, ICategory, INote, INoteToAddOrUpdate} from "../../types";
import {useDispatch, useSelector} from "react-redux";
import MainPageSummaryTable from "./MainPageSummaryTable";
import ButtonWithIcon from "../../components/ButtonWithIcon/ButtonWithIcon";
import {FaArchive, FaPlus} from "react-icons/fa";
import MainPageAddEditNoteModal from "./MainPageAddEditNoteModal";
import {addNote, deleteNote, editNote, setNotes, setCategories} from "../../redux/actions";
import {fetchCategories} from "../../services/categoriesService";
import {fetchNotes, updateNote, createNote, removeNote, archiveOrUnarchiveNote} from "../../services/notesServise";

const MainPage = () => {
    const dispatch = useDispatch();
    const notes:INote[] = useSelector((state: IAppState) => state.notes);
    const categories: ICategory[] = useSelector((state: IAppState) => state.categories);
    const [isArchiveVisible, setArchiveVisible] = useState(false);
    const [isAddEditModalOpen, setAddEditModalOpen] = useState(false);
    const [noteToEdit, setNoteToEdit] = useState<INote | null>(null);
    const [defaultCategoryId, setDefaultCategoryId] = useState<number>(0);

    const fetchInitialData = () => {
        fetchCategories(setDefaultCategoryId, dispatch, setCategories);
        fetchNotes(dispatch, setNotes);
    }

    useEffect(() => {
        fetchInitialData();
    }, []);

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

    const addNoteHandle = (note: INoteToAddOrUpdate) => {
        createNote(note, dispatch, addNote);
    }

    const updateNoteHandle = (id: number, note: INoteToAddOrUpdate) => {
        updateNote(id, note, dispatch, editNote);
    }

    const deleteNoteHandle = (id: number) => {
        removeNote(id, dispatch, deleteNote);
    }

    const archiveOrUnarchiveNoteHandle = (note: INote) => {
        archiveOrUnarchiveNote(note, dispatch, editNote);
    }

    return (
        <>
            <div className={"my-5 mx-auto w-19/20 md:w-5/6 overflow-x-auto"}>
                <MainPageMainTable notes={notes}
                                   editNoteHandle={openModalToEdit}
                                   archiveNoteHandle={archiveOrUnarchiveNoteHandle}
                                   deleteNoteHandle={deleteNoteHandle}/>
            </div>
            <div className={"my-5 mx-auto w-19/20 md:w-5/6 flex justify-end"}>
                <ButtonWithIcon text={isArchiveVisible?"Close Archive":"Open Archive"}
                                icon={<FaArchive/>}
                                onclick={openCloseArchiveHandle}/>
                <ButtonWithIcon text={"Add Note"} icon={<FaPlus/>} onclick={openModalToAdd}/>
            </div>
            {isArchiveVisible && <div className={"my-5 mx-auto w-19/20 md:w-5/6 overflow-x-auto"}>
                 <MainPageArchiveTable notes={notes} unarchiveNoteHandle={archiveOrUnarchiveNoteHandle}/>
            </div>}
            <div className={"my-5 mx-auto w-19/20 md:w-5/6"}>
                <MainPageSummaryTable notes={notes} categories={categories}/>
            </div>
            <MainPageAddEditNoteModal isOpen={isAddEditModalOpen}
                                      onClose={closeModal}
                                      noteToEdit={noteToEdit}
                                      onUpdate={updateNoteHandle}
                                      onAdd={addNoteHandle}
                                      categories={categories}
                                      defaultCategoryId={defaultCategoryId}/>
        </>
    )
}

export default MainPage;
