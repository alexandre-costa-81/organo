import { Component, input } from '@angular/core';
import { Livro } from "../livro/livro";
import { GeneroInterface } from '../livro/livro.interface';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-genero-literario',
  imports: [Livro, CommonModule],
  templateUrl: './genero-literario.html',
  styleUrl: './genero-literario.css',
})
export class GeneroLiterario {
  genero = input.required<GeneroInterface>();
}
