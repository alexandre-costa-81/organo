export interface LivroInterface {
  titulo: string;
  autoria: string;
  favorito: boolean;
  genero: GeneroInterface;
  imagem: string;
}

export interface GeneroInterface {
  id: string;
  value: string;
  livros: LivroInterface[];
}