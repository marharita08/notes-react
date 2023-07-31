import { ITableColumn } from "../types";
import { convertKeyToHeader } from "./stringService";

export function getColumnsByKeys(keys: string[]) {
    const columns: ITableColumn<Object>[] = [];
    for (const key of keys) {
        columns.push({key, "header": convertKeyToHeader(key)});
    }
    return columns;
}
