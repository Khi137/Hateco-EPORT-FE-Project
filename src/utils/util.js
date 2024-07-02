export function formatDateTime(isoString) {
  if (!isoString) {
    return "";
  }
  const [datePart, timePart] = isoString.split("T");
  const [year, month, day] = datePart.split("-");
  const [hours, minutes] = timePart.split(":");
  return `${day}/${month}/${year} ${hours}:${minutes}`;
}

export const reorderArray = (arr, idxs, to) => {
  const movedElements = arr.filter((_, idx) => idxs.includes(idx));
  const targetIdx = Math.min(...idxs) < to ? to + 1 : to;
  const leftSide = arr.filter(
    (_, idx) => idx < targetIdx && !idxs.includes(idx)
  );
  const rightSide = arr.filter(
    (_, idx) => idx >= targetIdx && !idxs.includes(idx)
  );
  return [...leftSide, ...movedElements, ...rightSide];
};

export const handleColumnsReorder = (tableData, targetColumnId, columnIds) => {
  const columns = tableData.reactGridColumns;
  const rows = tableData.reactGridRows;

  const to = columns.findIndex((column) => column.columnId === targetColumnId);
  const columnIdxs = columnIds.map((columnId) =>
    columns.findIndex((c) => c.columnId === columnId)
  );

  const reorderedColumns = reorderArray(columns, columnIdxs, to);

  const reorderCells = (cells) => {
    const cellMap = cells.reduce((acc, cell, idx) => {
      acc[columns[idx].columnId] = cell;
      return acc;
    }, {});
    return reorderedColumns.map((col) => cellMap[col.columnId]);
  };

  const reorderedRows = rows.map((row) => ({
    ...row,
    cells: reorderCells(row.cells),
  }));

  return {
    reactGridColumns: reorderedColumns,
    reactGridRows: reorderedRows,
  };
};

export const handleRowsReorder = (tableData, targetRowId, rowIds) => {
  const rows = tableData.reactGridRows;

  const to = rows.findIndex((row) => row.rowId === targetRowId);
  const rowIdxs = rowIds.map((rowId) =>
    rows.findIndex((row) => row.rowId === rowId)
  );

  const reorderedRows = reorderArray(rows, rowIdxs, to);

  return {
    ...tableData,
    reactGridRows: reorderedRows,
  };
};
