import React from 'react';
import MainPageMainTable from "./MainPageMainTable";
import MainPageArchiveTable from "./MainPageArchiveTable";
import ButtonWithIcon from "../../components/ButtonWithIcon/ButtonWithIcon";
import { FaArchive, FaPlus } from "react-icons/fa";
import "./MainPage.css";

const MainPage = () => {
    return (
        <>
            <div className={"table-container"}>
                <MainPageMainTable/>
            </div>
            <div className={"button-container"}>
                <ButtonWithIcon text={"Open Archive"} icon={<FaArchive/>}/>
                <ButtonWithIcon text={"Add Note"} icon={<FaPlus/>}/>
            </div>
            <div className={"table-container"}>
                <MainPageArchiveTable/>
            </div>
        </>
    )
}

export default MainPage;
