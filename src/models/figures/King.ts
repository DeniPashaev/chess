import { Colors } from '../colors';
import { Cell } from '../Cell';
import { FgigureNames, Figure } from "./Figures";
import blackLogo from "../../assets/black-king.png"
import whiteLogo from "../../assets/white-king.png"

export class King extends Figure{
    constructor(color: Colors, cell: Cell) {
        super(color, cell)
        this.logo = color === Colors.BLACK ? blackLogo : whiteLogo
        this.name = FgigureNames.KING
    }
}