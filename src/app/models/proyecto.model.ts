export class Proyecto{

    id?: number;
    titulo: string;
    lenguaje: string;
    descripcion: string;
    imagen: string;
    repo: string;
    url: string;

    constructor(titulo: string,lenguaje: string,descripcion: string,imagen: string,repo: string, url: string){
        this.titulo = titulo;
        this.lenguaje = lenguaje;
        this.descripcion = descripcion;
        this.imagen = imagen;
        this.repo = repo;
        this.url = url;

    }
}