import { Component } from '@angular/core';

@Component({
  selector: 'app-livro',
  imports: [],
  templateUrl: './livro.html',
  styleUrl: './livro.css',
})
export class Livro {
  livro = {
    titulo: 'O Alquimista',
    autoria: 'Paulo Coelho',
  };
}
