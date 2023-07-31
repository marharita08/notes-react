import React from 'react';
import Table from "../../components/Table/Table";
import { INote, ITableColumn, Summary } from '../../types';
import { getSummary } from "../../services/notesServise";
import { getColumnsByKeys } from "../../services/columnsService";
import { getSummaryKeys } from "../../services/keysService";

interface Props {
    notes: INote[]
}

const MainPageSummaryTable: React.FC<Props> = ({notes}) => {
    const summary:Summary[] = getSummary(notes);
    const summaryColumns: ITableColumn<Summary>[] = getColumnsByKeys(getSummaryKeys());

    return (
        <Table data={summary} columns={summaryColumns} />
    )
}

export default MainPageSummaryTable;
