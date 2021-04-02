import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pokemon-item',
  templateUrl: './pokemon-item.component.html',
  styleUrls: ['./pokemon-item.component.css']
})
export class PokemonItemComponent implements OnInit {
  @Input() pokemon: any;
  @Input() showWithPictures = true;
  catchStatus = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleCatchStatus(): void {
    this.catchStatus = !this.catchStatus;
  }

  isBigDamage(): boolean {
    return this.pokemon.damage > 50;
  }
}
