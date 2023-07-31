import React from 'react';
import MainPageMainTable from "./MainPageMainTable";
import MainPageArchiveTable from "./MainPageArchiveTable";
import "./MainPage.css";
import { IAppState, INote } from "../../types";
import { useSelector } from "react-redux";
import MainPageSummaryTable from "./MainPageSummaryTable";
import MainPageButtons from "./MainPageButtons";

const MainPage = () => {
    const notes:INote[] = useSelector((state:IAppState) => state.notes);

    return (
        <>
            <div className={"table-container"}>
                <MainPageMainTable notes={notes}/>
            </div>
            <div className={"button-container"}>
                <MainPageButtons/>
            </div>
            <div className={"table-container"}>
                <MainPageArchiveTable notes={notes}/>
            </div>
            <div className={"table-container"}>
                <MainPageSummaryTable notes={notes}/>
            </div>
        </>
    )
}

export default MainPage;
