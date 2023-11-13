import { Comunidad } from './comunidad.model';
import { Usuario } from './usuario.model';

export interface Comentario {
  id: number;
  contenido: string;
  fechaCreacion: Date;
  comunidad: Comunidad | null;
  usuario: Usuario;
  tipo: 'enviado' | 'recibido';
}
