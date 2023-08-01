import React, { useState, useEffect } from 'react';
import {INote} from "../../types";
import Modal from 'react-modal';
import {getCategories, getDefaultCategory} from "../../services/categoriesService";
import './MainPageAddEditNoteModal.css'
import ButtonWithIcon from "../../components/ButtonWithIcon/ButtonWithIcon";
import {FaSave} from "react-icons/fa";
import {GrClose} from "react-icons/gr"
import {createNote, updateNote} from "../../services/notesServise";

interface Props {
    isOpen: boolean,
    onClose: () => void,
    noteToEdit: INote | null,
    onUpdate: (note: INote) => void,
    onAdd: (note: INote) => void,
}

const MainPageAddEditNoteModal: React.FC<Props> = ({ isOpen, onClose, noteToEdit, onAdd, onUpdate }) => {
    const defaultCategory = getDefaultCategory();
    const [name, setName] = useState('');
    const [category, setCategory] = useState(defaultCategory);
    const [content, setContent] = useState('');

    const cleanFields = () => {
        setName('');
        setCategory(defaultCategory);
        setContent('');
    }

    useEffect(() => {
        if (noteToEdit) {
            setName(noteToEdit.name);
            setCategory(noteToEdit.category);
            setContent(noteToEdit.content);
        } else {
            cleanFields();
        }
    }, [noteToEdit]);

    const handleClose = () => {
        onClose();
        cleanFields();
    }

    const handleSave = (e: React.FormEvent) => {
        e.preventDefault();
        if (noteToEdit) {
            onUpdate(updateNote(noteToEdit, name, category, content));
        } else {
            onAdd(createNote(name, category, content));
        }
        handleClose();
    };


    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={handleClose}
            contentLabel="Modal Form"
            style={{
                content: {
                    width: '400px',
                    height: '500px',
                    top: '50%',
                    left: '50%',
                    right: 'auto',
                    bottom: 'auto',
                    transform: 'translate(-50%, -50%)'
                },
            }}
        >
            <button className="close-btn" onClick={handleClose}>
                <GrClose/>
            </button>
            <h2>{noteToEdit ? 'Edit Note' : 'Add Note'}</h2>
            <form onSubmit={handleSave}>
                <label>Name</label>
                <br/>
                <input
                    type="text"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <br/>
                <label>Category</label>
                <br/>
                <select
                    name="category"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                >
                    {getCategories().map(
                        (category: string) => <option value={category} key={category}>{category}</option>
                    )}
                </select>
                <br/>
                <label>Content</label>
                <br/>
                <textarea
                    name="content"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                />
                <br/>
                <ButtonWithIcon text={"Save"} icon={<FaSave/>} type={"submit"}/>
            </form>
        </Modal>
    );
}

export default MainPageAddEditNoteModal;

