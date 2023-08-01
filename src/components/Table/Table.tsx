import React from 'react';
import {ITableColumn} from "../../types";
import "./Table.css"

interface TableProps<T extends Record<string, any>> {
    data: T[];
    columns: ITableColumn<T>[];
}

function Table<T extends Record<string, any>>({ data, columns }: TableProps<T>) {
    return (
        <table>
            <thead>
                <tr>
                    {columns.map((column) => (
                        <th key={column.key.toString()}>
                            {column.icon || column.header}
                        </th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {data.map((item, index) => (
                    <tr key={index}>
                        {columns.map((column) => (
                            <td key={column.key.toString()}
                                className={column.icon?"icon-button":""}
                                onClick={():void => {
                                    if (column.onclick) {
                                        column.onclick(item);
                                    }
                                }}
                            >
                                {column.icon || getItemValue(item, column.key)}
                            </td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>

    );
}

function getItemValue<T extends Record<string, any>>(item: T, key: keyof T | string): React.ReactNode {
    return String(key in item ? item[key as keyof T] : '');
}

export default Table;
