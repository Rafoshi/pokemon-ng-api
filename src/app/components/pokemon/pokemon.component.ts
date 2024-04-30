import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Pokemon } from '../../interfaces/Pokemon';
import { PokemonService } from '../../services/pokemon.service';

@Component({
  selector: 'app-pokemon',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pokemon.component.html',
  styleUrl: './pokemon.component.css'
})
export class PokemonComponent {
  pokemons: Pokemon[] = [];
  constructor(private pokemonService: PokemonService) {
  }

  listar():Pokemon[] {
    return this.pokemons = this.pokemonService.listar();
  }

  ngOnInit(): void {
    this.listar();
  }
}
