import * as React from "react";
import { CellTemplate, Compatible, Uncertain, UncertainCompatible } from "@silevis/reactgrid";
import "./styles.scss";

export interface CustomHeaderCell {
    type: "header";
    text: string;
    sortFunction: () => Function;
}

export class CustomHeaderCellTemplate implements CellTemplate<CustomHeaderCell> {
    getCompatibleCell(uncertainCell: Uncertain<CustomHeaderCell>): Compatible<CustomHeaderCell> {
        const text = uncertainCell.text;
        const sortFunction = uncertainCell.sortFunction;
        console.log(uncertainCell);

        return { ...uncertainCell, text, sortFunction };
    }

    update(
        cell: Compatible<CustomHeaderCell>,
        cellToMerge: UncertainCompatible<CustomHeaderCell>
    ): Compatible<CustomHeaderCell> {
        const { text, sortFunction } = cellToMerge;
        return this.getCompatibleCell({ ...cell, text, sortFunction });
    }

    render(cell: Compatible<CustomHeaderCell>): React.ReactNode {
        const handleSortClick = () => {
            console.log(cell);
        };

        return (
            <div className="rg-custom-header-cell" onClick={handleSortClick}>
                <span>{cell.text}</span>
                <div className="rg-sort-arrows">
                    <span className={`rg-sort-arrow`}>&#x25B2;</span>
                    <span className={`rg-sort-arrow`}>&#x25BC;</span>
                </div>
            </div>
        );
    }
}
