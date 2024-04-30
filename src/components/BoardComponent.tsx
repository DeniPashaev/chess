import { FC } from 'react';
import { Board } from '../models/Board';
import CellComponnet from './CellComponnet';
import React from 'react';

interface BoardProps {
    board: Board;
    setBoard: (board: Board) => void
}

const BoardComponent: FC<BoardProps> = ({board, setBoard}) => {
    return (
        <div className='board'>
            {board.cells.map((row, index) => 
           <React.Fragment key={index}>
            {row.map(cell =>
                <CellComponnet cell={cell} key={cell.id}/>
            )}
           </React.Fragment>
            )} 
        </div>
    );
};

export default BoardComponent;