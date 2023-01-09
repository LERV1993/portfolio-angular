import { Component, OnInit } from '@angular/core';
import { ProyectoService } from 'src/app/services/proyecto.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  public myProyectos: any = [];
  isLogged = false

  constructor(private proyectoService: ProyectoService,
    private tokenService: TokenService) { }

  ngOnInit(): void {
    this.cargarProyectos();

    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarProyectos(): void {
    this.proyectoService.obtenerDatos().subscribe(resp => {
      this.myProyectos = resp;
    });
  }

  delete(id?: number) {
    if (id != undefined) {
      this.proyectoService.delete(id).subscribe({
        next: () => {
          this.cargarProyectos();
          window.location.reload();
        },
        error: () => {
          alert("No se pudo borrar la experiencia seleccionada.");
        }
      })
    }

  }
}
