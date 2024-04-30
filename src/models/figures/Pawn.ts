import { Colors } from '../colors';
import { Cell } from '../Cell';
import { FgigureNames, Figure } from "./Figures";
import blackLogo from "../../assets/black-pawn.png"
import whiteLogo from "../../assets/white-pawn.png"

export class Pawn extends Figure{
    constructor(color: Colors, cell: Cell) {
        super(color, cell)
        this.logo = color === Colors.BLACK ? blackLogo : whiteLogo
        this.name = FgigureNames.PAWN
    }
}