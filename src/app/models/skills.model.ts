export class Skills{

    id?: number;
    porcentaje: number;
    imagen: string;
    tecnologia: string;

    constructor( porcentaje: number,imagen: string,tecnologia: string){
        this.porcentaje=porcentaje;
        this.imagen=imagen;
        this.tecnologia=tecnologia;
    }
}