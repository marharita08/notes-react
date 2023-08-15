import React from 'react';
import Table from "../../components/Table/Table";
import {ICategory, INote, ITableColumn, Summary} from '../../types';
import {getSummary} from "../../services/notesServise";
import {getColumnsByKeys} from "../../services/columnsService";
import {getSummaryKeys} from "../../services/keysService";

interface Props {
    notes: INote[],
    categories: ICategory[]
}

const MainPageSummaryTable: React.FC<Props> = ({notes, categories}) => {
    const summary:Summary[] = getSummary(notes, categories);
    const summaryColumns: ITableColumn<Summary>[] = getColumnsByKeys(getSummaryKeys());

    return (
        <Table data={summary} columns={summaryColumns} header={"Summary"}/>
    )
}

export default MainPageSummaryTable;
