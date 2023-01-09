import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Skills } from 'src/app/models/skills.model';
import { SkillsService } from 'src/app/services/skills.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-nueva-habilidad',
  templateUrl: './nueva-habilidad.component.html',
  styleUrls: ['./nueva-habilidad.component.css']
})
export class NuevaHabilidadComponent implements OnInit {

  porcentaje: number = null;
  imagen: string = '';
  tecnologia: string = '';

  habilidad: Skills = null;

  isLogged = false;

  constructor(private habilidadService: SkillsService,
    private router: Router,
    private tokenService: TokenService) { }

  ngOnInit(): void {
    if(this.tokenService.getToken()){
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  onCreate(): void {
    const habilidad = new Skills(this.porcentaje,this.imagen,this.tecnologia);
    this.habilidadService.save(habilidad).subscribe({

      next: () => {
        alert("Habilidad añadida");
        this.router.navigate(['']);
      },
      error: () => {
        alert("No se pudo generar habilidad.");
        this.router.navigate(['']);
      }
    })
  }

}
