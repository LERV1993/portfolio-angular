import { Component, OnInit } from '@angular/core';
import { ExpService } from 'src/app/services/experiencia.service';
import { Experiencia } from 'src/app/models/experiencia.model';
import { ActivatedRoute, Router } from '@angular/router';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-editar-experiencia',
  templateUrl: './editar-experiencia.component.html',
  styleUrls: ['./editar-experiencia.component.css']
})
export class EditarExperienciaComponent implements OnInit {
  expLab: Experiencia = null;
  isLogged = false;

  constructor(private experienciaService: ExpService,
    private activatedRouter: ActivatedRoute,
    private router: Router,
    private tokenService: TokenService) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.experienciaService.detail(id).subscribe({
      next: (data) => {
        this.expLab = data
      },
      error: () => {
        alert('Error al modificar experiencia')
      }
    });

    if(this.tokenService.getToken()){
      this.isLogged = true;
    }else{
      this.isLogged=false;
    }
  }

    onUpdate(): void {
      const id = this.activatedRouter.snapshot.params['id'];
      this.experienciaService.update(id, this.expLab).subscribe({
        next: () => {
          this.router.navigate(['']);
        },
        error: () => {
          alert('Error al modificar experiencia');
        }
      })
    }
  }

