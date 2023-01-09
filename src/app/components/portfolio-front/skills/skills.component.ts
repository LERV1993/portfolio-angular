import { Component, OnInit } from '@angular/core';
import { SkillsService } from 'src/app/services/skills.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  public myHabilidades: any = [];
  isLogged = false;
  constructor(private habilidadService: SkillsService,
    private tokenService: TokenService) { }

  ngOnInit(): void {
    this.cargarHabilidades();

    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarHabilidades(): void {
    this.habilidadService.obtenerDatos().subscribe(resp => {
      this.myHabilidades = resp;
    });
  }


  delete(id?: number) {
    if (id != undefined) {
      this.habilidadService.delete(id).subscribe({
        next: () => {
          this.cargarHabilidades();
          window.location.reload();
        },
        error: () => {
          alert("No se pudo borrar la habilidad seleccionada.");
        }
      })
    }

  }
}
