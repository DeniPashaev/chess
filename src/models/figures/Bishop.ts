import { Colors } from '../colors';
import { Cell } from '../Cell';
import { FgigureNames, Figure } from "./Figures";
import blackLogo from "../../assets/black-bishop.png"
import whiteLogo from "../../assets/white-bishop.png"

export class Bishop extends Figure{
    constructor(color: Colors, cell: Cell) {
        super(color, cell)
        this.logo = color === Colors.BLACK ? blackLogo : whiteLogo
        this.name = FgigureNames.BISHOP
    }
}