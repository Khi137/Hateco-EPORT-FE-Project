import React from "react";
import { Checkbox } from "antd";

class CheckboxCellTemplate {
  getCompatibleCell(uncertainCell) {
    const value =
      uncertainCell.value instanceof Object
        ? uncertainCell.value
        : { checked: false };
    return { ...uncertainCell, value };
  }

  handleKeyDown(cell, keyCode, ctrl, shift, alt) {
    return { cell, enableEditMode: false };
  }

  update(cell, cellToMerge) {
    return this.getCompatibleCell({ ...cell, value: cellToMerge.value });
  }

  getClassName(cell, isInEditMode) {
    return "";
  }

  render(cell, isInEditMode, onCellChanged) {
    return (
      <Checkbox
        checked={cell.value.checked}
        onChange={() =>
          onCellChanged(
            { ...cell, value: { checked: !cell.value.checked } },
            true
          )
        }
      />
    );
  }
}

export default CheckboxCellTemplate;
