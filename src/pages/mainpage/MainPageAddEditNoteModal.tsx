import React, {useState, useEffect, useCallback} from 'react';
import {ICategory, INote, INoteToAddOrUpdate} from "../../types";
import Modal from 'react-modal';
import ButtonWithIcon from "../../components/ButtonWithIcon/ButtonWithIcon";
import {FaSave} from "react-icons/fa";
import {GrClose} from "react-icons/gr"

interface Props {
    isOpen: boolean,
    onClose: () => void,
    noteToEdit: INote | null,
    onUpdate: (id: number, note: INoteToAddOrUpdate) => void,
    onAdd: (note: INoteToAddOrUpdate) => void,
    categories: ICategory[],
    defaultCategoryId: number,
}

const MainPageAddEditNoteModal: React.FC<Props> = ({ isOpen, onClose, noteToEdit, onAdd, onUpdate, categories, defaultCategoryId }) => {
    const [name, setName] = useState('');
    const [category, setCategory] = useState(defaultCategoryId);
    const [content, setContent] = useState('');

    const cleanFields = useCallback(() => {
        setName('');
        setCategory(defaultCategoryId);
        setContent('');
    }, [defaultCategoryId]);

    useEffect(() => {
        if (noteToEdit) {
            setName(noteToEdit.name);
            setCategory(noteToEdit.category.category_id);
            setContent(noteToEdit.content);
        } else {
            cleanFields();
        }
    }, [noteToEdit, cleanFields]);

    const handleClose = () => {
        onClose();
        cleanFields();
    }

    const handleSave = (e: React.FormEvent) => {
        console.log(noteToEdit);
        console.log(category);
        e.preventDefault();
        if (noteToEdit) {
            onUpdate(noteToEdit.note_id, {name, category_id: category, content});
        } else {
            onAdd({name, category_id: category, content});
        }
        handleClose();
    };


    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={handleClose}
            contentLabel="Modal Form"
            className={"w-px-400 max-w-full h-px-550 max-h-screen top-auto left-auto right-1/2 bottom-1/2 translate-x-1/2 " +
                "translate-y-1/2 absolute bg-white p-5 border border-gray-200 rounded overflow-y-auto"}>
            <button className="absolute top-2.5 right-2.5 text-lg border-0" onClick={handleClose}>
                <GrClose/>
            </button>
            <h2 className={"text-center font-bold text-lg"}>{noteToEdit ? 'Edit Note' : 'Add Note'}</h2>
            <form onSubmit={handleSave}>
                <label className={"m-1.5"}>Name</label>
                <br/>
                <input
                    type="text"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required={true}
                    className={"m-1.5 p-1.5 w-19/20 border rounded box-border"}
                />
                <br/>
                <label className={"m-1.5"}>Category</label>
                <br/>
                <select
                    name="category"
                    value={category}
                    onChange={(e) => setCategory(+e.target.value)}
                    className={"m-1.5 p-1.5 w-19/20 border rounded box-border"}
                >
                    {categories.map(
                        (category: ICategory) =>
                            <option value={category.category_id} key={category.name}>
                                {category.name}
                            </option>
                    )}
                </select>
                <br/>
                <label className={"m-1.5"}>Content</label>
                <br/>
                <textarea
                    name="content"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    required={true}
                    className={"m-1.5 p-1.5 w-19/20 border rounded box-border h-52 max-h-52 min-w-fit min-h-px-40"}
                />
                <br/>
                <ButtonWithIcon text={"Save"} icon={<FaSave/>} type={"submit"} className={"m-1.5 w-19/20"}/>
            </form>
        </Modal>
    );
}

export default MainPageAddEditNoteModal;

