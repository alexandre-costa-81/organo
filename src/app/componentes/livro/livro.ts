import { Component } from '@angular/core';
import { LivroInterface } from './livro.interface';

@Component({
  selector: 'app-livro',
  imports: [],
  templateUrl: './livro.html',
  styleUrl: './livro.css',
})
export class Livro {
  livro: LivroInterface = {
    titulo: 'O Alquimista',
    autoria: 'Paulo Coelho',
    favorito: false,
    genero: 'Ficção',
    imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUTadAgtHb677Fy6QBLxJtQ0wsT739BYdNIkc8ZNnzmveHIB-II5T2t3Gywp_XDKfx4-rEyaMbxZEZ94Q4DIFJxWMwOYEuNJzcbrez44cwqg&s=10',
  };

  alterarFavorito() {
    this.livro.favorito = !this.livro.favorito;
  }
}
