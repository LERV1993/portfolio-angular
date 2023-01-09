export class Banner {

    id?: number;
    titulo1: string;
    titulo2: string;
    titulo3: string;
    subtitulo: string;
    descripcion1: string;
    descripcion2: string;
    descripcion3: string;
    imagen: string;
    pie_foto1: string;
    pie_foto2: string;

    constructor(id: number,titulo1: string,titulo2: string,titulo3: string, subtitulo: string,descripcion1: string,descripcion2: string,descripcion3: string, imagen: string, pie_foto1: string, pie_foto2: string) {
        this.id = id;
        this.titulo1 = titulo1;
        this.titulo2 = titulo2;
        this.titulo3 = titulo3;
        this.subtitulo = subtitulo;
        this.descripcion1 = descripcion1;
        this.descripcion2 = descripcion2;
        this.descripcion3 = descripcion3;
        this.imagen = imagen;
        this.pie_foto1 = pie_foto1;
        this.pie_foto2 = pie_foto2;
    }
}