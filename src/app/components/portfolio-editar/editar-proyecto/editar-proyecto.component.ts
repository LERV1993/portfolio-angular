import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Proyecto } from 'src/app/models/proyecto.model';
import { ProyectoService } from 'src/app/services/proyecto.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-editar-proyecto',
  templateUrl: './editar-proyecto.component.html',
  styleUrls: ['./editar-proyecto.component.css']
})
export class EditarProyectoComponent implements OnInit {

  proyecto: Proyecto = null;
  isLogged = false;

  constructor(private proyectoService:ProyectoService,
    private router: Router,
    private activatedRoute:ActivatedRoute,
    private tokenService:TokenService) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.proyectoService.detail(id).subscribe({
      next: (data) => {
        this.proyecto = data
      },
      error: () => {
        alert('Error al modificar la proyecto.')
      }
    });
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  onUpdate(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.proyectoService.update(id, this.proyecto).subscribe({
      next: () => {
        this.router.navigate(['']);
      },
      error: () => {
        alert('Error al modificar el proyecto.');
      }
    })
  }
}
