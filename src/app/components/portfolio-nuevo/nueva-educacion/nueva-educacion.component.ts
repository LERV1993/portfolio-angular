import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Educacion } from 'src/app/models/educacion.model';
import { EducacionService } from 'src/app/services/educacion.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-nueva-educacion',
  templateUrl: './nueva-educacion.component.html',
  styleUrls: ['./nueva-educacion.component.css']
})
export class NuevaEducacionComponent implements OnInit {

  imagen: string = '';
  titulo: string = '';
  institucion: string = '';
  estado: string = '';
  fecha: string = '';

  educacion: Educacion = null;

  isLogged = false;

  constructor(private educacionService:EducacionService,
    private router: Router,
    private tokenService:TokenService) { }

  ngOnInit(): void {
    if(this.tokenService.getToken()){
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  onCreate(): void {
    const educacion = new Educacion(this.imagen,this.titulo,this.institucion,this.estado,this.fecha);
    this.educacionService.save(educacion).subscribe({

      next: () => {
        alert("Educación añadida");
        this.router.navigate(['']);
      },
      error: () => {
        alert("No se pudo generar educación.");
        this.router.navigate(['']);
      }
    })
  }

}
