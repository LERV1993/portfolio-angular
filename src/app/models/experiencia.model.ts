export class Experiencia {

    id?: number;
    imagen!: string;
    cargo!: string;
    empresa!: string;
    iniciofin!: string;
    lugar!: string;
    desc_1!: string;
    desc_2!: string;
    desc_3!: string;
    desc_4!: string;
    desc_5!: string;

    constructor(imagen: string, cargo: string, empresa: string, iniciofin: string, lugar: string, desc_1: string, desc_2: string, desc_3: string, desc_4: string, desc_5: string) {

        this.imagen = imagen;
        this.cargo = cargo;
        this.empresa = empresa;
        this.iniciofin = iniciofin;
        this.lugar = lugar;
        this.desc_1 = desc_1;
        this.desc_2 = desc_2;
        this.desc_3 = desc_3;
        this.desc_4 = desc_4;
        this.desc_5 = desc_5;

    }
}