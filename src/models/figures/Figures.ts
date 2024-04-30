import logo from "../../assets/black-knight.png"
import { Cell } from "../Cell";
import { Colors } from "../colors";

export enum FgigureNames {
"FIGURE" = "Фигура",
"KING" = "Король",
"KNIGHT" = "Конь",
"PAWN" = "Пешка",
"QUEEN" = "Королева",
"ROOK" = "Ладья",
"BISHOP" = "СлоН",
}

export class Figure {
    color: Colors;
    logo:typeof logo | null;
    cell: Cell;
    name: FgigureNames;
    id: number;


constructor(color: Colors, cell:Cell) {
    this.color = color;
    this.cell = cell;
    this.cell.figure = this;
    this.logo = null
    this.name = FgigureNames.FIGURE
    this.id = Math.random()
}

canMove(target: Cell) : boolean {
    return true;
}
// moveFigure(target: Cell) {}
}