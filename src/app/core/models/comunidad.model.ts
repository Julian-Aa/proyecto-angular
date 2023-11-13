import { Comentario } from './comentario.model';

export interface Comunidad {
  id: number;
  nombre: string;
  descripcion: string;
  imagenUrl: string;
  usuarioId: number;
  comentarios?: Comentario[];
}
