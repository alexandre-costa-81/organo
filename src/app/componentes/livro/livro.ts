import { Component, input } from '@angular/core';
import { LivroInterface } from './livro.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-livro',
  imports: [CommonModule],
  templateUrl: './livro.html',
  styleUrl: './livro.css',
})
export class Livro {

  livro = input.required<LivroInterface>();

  alterarFavorito() {
    this.livro().favorito = !this.livro().favorito;
  }
}
