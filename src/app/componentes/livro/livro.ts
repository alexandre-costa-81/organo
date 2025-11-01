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
    imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUTadAgtHb677Fy6QBLxJtQ0wsT739BYdNIkc8ZNnzmveHIB-II5T2t3Gywp_XDKfx4-rEyaMbxZEZ94Q4DIFJxWMwOYEuNJzcbrez44cwqg&s=10',
  };
}
