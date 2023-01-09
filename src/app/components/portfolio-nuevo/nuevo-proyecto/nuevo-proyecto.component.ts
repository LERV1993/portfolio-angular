import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proyecto } from 'src/app/models/proyecto.model';
import { ProyectoService } from 'src/app/services/proyecto.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-nuevo-proyecto',
  templateUrl: './nuevo-proyecto.component.html',
  styleUrls: ['./nuevo-proyecto.component.css']
})
export class NuevoProyectoComponent implements OnInit {

  titulo: string='';
  lenguaje: string='';
  descripcion: string='';
  imagen: string='';
  repo: string='';
  url: string='';

  proyecto: Proyecto = null;

  isLogged = false;

  constructor(private proyectoService:ProyectoService,
    private tokenService:TokenService,
    private router:Router) { }

  ngOnInit(): void {
    if(this.tokenService.getToken()){
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  onCreate(): void {
    const proyecto = new Proyecto(this.titulo,this.lenguaje,this.descripcion,this.imagen,this.repo,this.url);
    this.proyectoService.save(proyecto).subscribe({

      next: () => {
        alert("Proyecto añadido");
        this.router.navigate(['']);
      },
      error: () => {
        alert("No se pudo generar proyecto.");
        this.router.navigate(['']);
      }
    })
  }

}
