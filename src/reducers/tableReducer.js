import { createSlice } from "@reduxjs/toolkit";
import { handleColumnsReorder, handleRowsReorder } from "../utils/util";

const generateColumnsData = (columnsFormat) => {
    return columnsFormat?.map((column) => ({
        ...column,
        // sortFunction: () => handleSort(column.columnId)
    }));
};

const generateRowsHeader = (rowsHeader) => {
    return {
        rowId: "header",
        cells: rowsHeader
    };
};

const generateRowData = (container, index, rowsFormat, reorderRow) => {
    return {
        rowId: String(index + 1),
        reorderable: Boolean(reorderRow),
        cells: rowsFormat(container, index),
    };
};

const generateTableData = (dataList, rowsFormat, reorderRow) => {
    return dataList?.map((container, index) =>
        generateRowData(container, index, rowsFormat, reorderRow)
    );
};

const initialState = {
    tableName: "",
    defaultData: [],
    columnsFormat: [],
    rowsFormat: null,
    rowsHeader: {},
    tableData: {
        reactGridColumns: [],
        reactGridRows: [],
    },
};

const tableSlice = createSlice({
    name: "table",
    initialState,
    reducers: {
        getDeFaultData: (state, action) => {
            const updatedRows = state.defaultData.map(proxyObject => {
                const plainObject = {};
                for (let key in proxyObject) {
                    plainObject[key] = proxyObject[key];
                }
                return plainObject;
            });
            console.log(updatedRows);
            // return updatedRows
        },
        setData: (state, action) => {
            const { defaultData, columnsFormat, rowsHeader, rowsFormat, tableName, reorderRow } = action.payload;
            const tableData = {
                reactGridColumns: generateColumnsData(columnsFormat ? columnsFormat : state.columnsFormat),
                reactGridRows: [
                    generateRowsHeader(rowsHeader ? rowsHeader : state.rowsHeader),
                    ...generateTableData(defaultData || [], rowsFormat ? rowsFormat : state.rowsFormat, reorderRow),
                ],
            };
            state.tableName = tableName ? tableName : state.tableName;
            state.defaultData = defaultData ? defaultData : state.defaultData;
            state.columnsFormat = columnsFormat ? columnsFormat : state.columnsFormat;
            state.rowsFormat = rowsFormat ? rowsFormat : state.rowsFormat;
            state.rowsHeader = rowsHeader ? rowsHeader : state.rowsHeader;
            state.tableData = tableData ? tableData : state.tableData;
        },
        addRow: (state, action) => {
            const { newRow } = action.payload;
            const updatedRows = state.tableData.reactGridRows.map(proxyObject => {
                const plainObject = {};
                for (let key in proxyObject) {
                    plainObject[key] = proxyObject[key];
                }
                return plainObject;
            });
            updatedRows.push(generateRowData(newRow.newRow, Number(newRow.index), state.rowsFormat, newRow.reorderRow));
            state.tableData.reactGridRows = updatedRows;
        },
        deleteRows: (state, action) => {
            const { rows } = action.payload;
            const idxToDelete = rows.map(row => row.idx);
            const updatedRows = state.tableData.reactGridRows.map(proxyObject => {
                const plainObject = {};
                for (let key in proxyObject) {
                    plainObject[key] = proxyObject[key];
                }
                return plainObject;
            });
            const filteredRows = updatedRows.filter((row, index) => !idxToDelete.includes(index));
            console.log(filteredRows);
            state.tableData.reactGridRows = filteredRows;
        },
        reorderColumns: (state, action) => {
            console.log("get in");
            const { targetColumnId, columnIds } = action.payload;
            const { tableData } = state;
            const updatedTableData = handleColumnsReorder(
                tableData,
                targetColumnId,
                columnIds
            );
            state.tableData = updatedTableData
        },
        reorderRows: (state, action) => {
            const { targetRowId, rowIds } = action.payload;
            const { tableData } = state;
            const updatedTableData = handleRowsReorder(tableData, targetRowId, rowIds);
            state.tableData = updatedTableData
        },
        handleColumnResize: (state, action) => {
            const { columnId, width } = action.payload;
            state.tableData.reactGridColumns = state.tableData.reactGridColumns?.map(column => {
                if (column.columnId === columnId) {
                    return { ...column, width };
                }
                return column;
            });
        },
        handleCellsChanged: (state, action) => {
            const { changes } = action.payload;
            const rows = state.tableData.reactGridRows?.map(row => ({
                ...row,
                cells: row.cells?.map(cell => ({ ...cell })),
            }));

            changes.forEach(change => {
                const row = rows.find(r => r.rowId === change.rowId);
                if (row) {
                    const columnIndex = state.tableData.reactGridColumns.findIndex(col => col.columnId === change.columnId);
                    if (columnIndex >= 0) {
                        const cell = row.cells[columnIndex];
                        if (change.newCell.type === "checkbox") {
                            cell.checked = change.newCell.checked;
                        } else {
                            cell.text = change.newCell.text;
                        }

                        const dataIndex = parseInt(change.rowId, 10) - 1;
                        if (state.defaultData[dataIndex]) {
                            const columnKey = state.tableData.reactGridColumns[columnIndex].columnId;
                            state.defaultData[dataIndex] = {
                                ...state.defaultData[dataIndex],
                                [columnKey]: change.newCell.type === "checkbox" ? change.newCell.checked : change.newCell.text,
                            };
                        }
                    }
                }
            });

            state.tableData.reactGridRows = rows;
        },
        handleSort: (state, action) => {
            const { columnId } = action.payload;
            state.defaultData.sort((a, b) => a[columnId].localeCompare(b[columnId]));
            state.tableData.reactGridRows = [
                generateRowsHeader(state.rowsHeader),
                ...generateTableData(state.defaultData, state.rowsFormat, state.reorderRow),
            ];
        }
    },
});

export const {
    getDeFaultData,
    setData,
    updateRow,
    addRow,
    deleteRows,
    reorderColumns,
    reorderRows,
    handleColumnResize,
    handleCellsChanged,
    handleSort
} = tableSlice.actions;

export default tableSlice.reducer;
