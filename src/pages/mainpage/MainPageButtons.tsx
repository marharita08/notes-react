import React from 'react';
import ButtonWithIcon from "../../components/ButtonWithIcon/ButtonWithIcon";
import { FaArchive, FaPlus } from "react-icons/fa";

const MainPageButtons = () => {
    return (
        <>
            <ButtonWithIcon text={"Open Archive"} icon={<FaArchive/>}/>
            <ButtonWithIcon text={"Add Note"} icon={<FaPlus/>}/>
        </>
    )
}

export default MainPageButtons;
