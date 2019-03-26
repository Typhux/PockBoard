import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core/src/metadata/directives';
import { ConfigurationBoard } from './configurationBoard';
import { Tile } from './tile';


@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

// Get the configuration of the board:
@Input() configuration: ConfigurationBoard;

// Get the data for each tile
@Input() data: any;

// Array of all tiles
public tiles: any[];

// Width of the board to display flex wrap
public width: string;

// Get the selected tile
private selectedTile: Tile;

// Array of tiles enlightened
private enlightenedTiles: Tile[];

  constructor() {
    this.tiles = new Array();
    this.enlightenedTiles = new Array();
   }

  ngOnInit() {
    // Board creation
    this.InitializeBoard();
  }

  // When a player click on a tile
  public selectTile(tile: Tile) {
    this.selectedTile = this.tiles.find(t => t.selected);
    if (this.selectedTile) {
      tile.toDefault();
      this.selectedTile = null;
      this.resetAll();
    }else {
      tile.toSelect();
      this.selectedTile = tile;
    }
  }

  // Reset all the tile to default
  private resetAll() {
    this.tiles.forEach(tile => {
      tile.toDefault();
    });
  }

  // Enlight the tiles selectable
  private enlightTile(tiles: Tile[]) {
    tiles.forEach(tile => {
      tile.toEnlight();
    });
  }

  private InitializeBoard() {
    // Compute the board width for the flex display
    // 102 = width tile + border
    this.width = this.configuration.cols * 106 + 'px';

    // Initialize number to 1 to get tile id
    const id = 1;
    // Compute configuration columns and configuration rows
    // to get a table with all the tiles
    for (let i = 0; i < this.configuration.rows; i++) {
      for (let j = 0; j < this.configuration.cols; j++) {
        this.tiles.push(new Tile(i, j));
      }
    }
  }

}
