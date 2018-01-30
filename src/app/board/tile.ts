export class Tile{
    readonly id: string;
    readonly coordinate: Coordinate;
    background: string;
    private border: string;
    readonly defaultBorder: string = 'black 1px solid';
    readonly selectBorder: string = 'red 1px solid';
    readonly enlightBorder: string = 'green 1px solid';
    get; selected: boolean;
    enlightened: boolean;
    item: any;

    constructor(col, row) {
        //Generate an id
        this.id = this.generateGuid();

        //Set the coordinate for the tile
        this.coordinate = new Coordinate();
        this.coordinate.col = col;
        this.coordinate.row = row;

        //Apply default border to the tile
        this.border = this.defaultBorder;
    }

    //Display the tile as selected
    public toSelect() {
        this.border = this.selectBorder;
        this.selected = true;
    }

    //Display the tile as enlightened
    public toEnlight() {
        this.border = this.enlightBorder;
        this.enlightened = true;
    }

    //Display the tile as default
    public toDefault() {
        this.selected = false;
        this.enlightened = false;
        this.border = this.defaultBorder;
    }

    //Check if the tile is available to be enlighten
    public toRange(factor: number, baseCoordinate: Coordinate): boolean {
        let maxCol = baseCoordinate
        if(this.coordinate.col)
        return true;
    }

    //Generate random guid
    private  generateGuid() {
        return this.randomHex() + this.randomHex() + '-' + this.randomHex() +
         '-' + this.randomHex() + '-' + this.randomHex() + '-' +
          this.randomHex() + this.randomHex() + this.randomHex();
      }

    //Generate 4 random hexadecimal number
    private randomHex() {
        return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
    }
}

export class Coordinate{
    col: number;
    row: number;

    
}