import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../pokemon.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  collection = [
    new Pokemon(1, 'bulbasaur', 100),
    new Pokemon(2, 'ivysaur', 3),
    new Pokemon(3, 'venusaur', 60),
  ];
  showWithPictures = true;

  constructor() { }

  ngOnInit(): void {
  }

  toggleShowMode(): void {
    this.showWithPictures = !this.showWithPictures;
  }
}
