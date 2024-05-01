import { RowID, RowElement } from './interface';

declare function insertRow(row: RowElement): RowID;
declare function updateRow(rowId: RowID, row: RowElement): void;
declare function deleteRow(rowId: RowID): void;