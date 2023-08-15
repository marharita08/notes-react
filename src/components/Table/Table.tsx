import React from 'react';
import {ITableColumn} from "../../types";

interface TableProps<T extends Record<string, any>> {
    data: T[];
    columns: ITableColumn<T>[];
    header: string;
}

function Table<T extends Record<string, any>>({ data, columns, header }: TableProps<T>) {
    return (
        <table className={"w-full border-collapse"}>
            <caption className={"text-lg font-bold"}>{header}</caption>
            <thead>
                <tr className={"bg-green"}>
                    {columns.map((column) => (
                        <th key={column.key.toString()} className={"p-2.5"}>
                            {column.icon || column.header}
                        </th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {data.map((item, index) => (
                    <tr key={index} className={"bg-light-green"}>
                        {columns.map((column) => (
                            <td key={column.key.toString()}
                                className={column.icon?"p-2.5 text-center hover:bg-green hover:cursor-pointer":"p-2.5"}
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
    const value = key in item ? item[key as keyof T] : '';
    if (value === null || value === undefined) {
        return '';
    }
    if (key === 'created') {
        return new Date(value).toLocaleDateString();
    }
    if (typeof value === 'object' && 'name' in value) {
        return value['name'];
    }
    return String(value);
}

export default Table;
