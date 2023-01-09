export class Educacion {

    id?: number;
    imagen: string;
    titulo: string;
    institucion: string;
    estado: string;
    fecha: string;

    constructor(imagen: string, titulo: string, institucion: string, estado: string, fecha: string){

        this.imagen = imagen;
        this.titulo = titulo;
        this.institucion = institucion;
        this.estado = estado;
        this.fecha = fecha;
    }
}