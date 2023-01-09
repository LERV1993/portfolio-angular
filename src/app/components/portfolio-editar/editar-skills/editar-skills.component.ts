import { Component, OnInit } from '@angular/core';
import { Skills } from 'src/app/models/skills.model';
import { ActivatedRoute, Router } from '@angular/router';
import { TokenService } from 'src/app/services/token.service';
import { SkillsService } from 'src/app/services/skills.service';

@Component({
  selector: 'app-editar-skills',
  templateUrl: './editar-skills.component.html',
  styleUrls: ['./editar-skills.component.css']
})
export class EditarSkillsComponent implements OnInit {

  habilidad: Skills = null;
  isLogged = false;

  constructor(private habilidadService: SkillsService,
    private activatedRouter: ActivatedRoute,
    private router: Router,
    private tokenService: TokenService) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.habilidadService.detail(id).subscribe({
      next: (data) => {
        this.habilidad = data
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
    this.habilidadService.update(id, this.habilidad).subscribe({
      next: () => {
        this.router.navigate(['']);
      },
      error: () => {
        alert('Error al modificar habilidad');
      }
    })
  }

}
