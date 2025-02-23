import Categoria from './Categoria';

export default interface Produto {
  preco: ReactNode;
  titulo: ReactNode;
  id: number;
  nome: string;
  preço: string;
  foto: string;
  categoria: Categoria | null;
}