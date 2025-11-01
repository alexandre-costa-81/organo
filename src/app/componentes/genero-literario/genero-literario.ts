import { Component, input } from '@angular/core';
import { Livro } from "../livro/livro";
import { livros } from '../../mock-livros';
import { GeneroInterface } from '../livro/livro.interface';

@Component({
  selector: 'app-genero-literario',
  imports: [Livro],
  templateUrl: './genero-literario.html',
  styleUrl: './genero-literario.css',
})
export class GeneroLiterario {
  genero = input.required<GeneroInterface>();
}
