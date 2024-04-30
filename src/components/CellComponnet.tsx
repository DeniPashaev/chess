import React, { FC } from 'react';
import { Cell } from '../models/Cell';

interface CellProps {
    cell: Cell;
}

const CellComponnet: FC<CellProps> = ({cell}) => {
    return (
        <div className={["cell", cell.color].join(" ")}>
            {cell.figure?.logo && <img src={cell.figure.logo} alt='img' />}
        </div>
    );
};

export default CellComponnet;