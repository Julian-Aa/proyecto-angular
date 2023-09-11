export class Comunidad {
  constructor(
    public id: number | undefined,
    public nombre: string | undefined,
    public descripcion: string | undefined,
    public imagenUrl: string | undefined
  ) {}

  // Getter para la propiedad id
  get getId(): number | undefined {
    return this.id;
  }

  // Getter para la propiedad nombre
  get getNombre(): string | undefined {
    return this.nombre;
  }

  // Getter para la propiedad descripcion
  get getDescripcion(): string | undefined {
    return this.descripcion;
  }

  // Getter para la propiedad imagenUrl
  get getImagenUrl(): string | undefined {
    return this.imagenUrl;
  }
}