import { Component, OnInit } from '@angular/core';
import { ExpService } from 'src/app/services/experiencia.service';
import { TokenService } from 'src/app/services/token.service';


@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
  public myExp: any = [];
  isLogged = false


  constructor(private experienciaService: ExpService,
    private tokenService: TokenService) { }

  ngOnInit(): void {
    this.cargarExperiencia();

    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }

  }

  cargarExperiencia(): void {
    this.experienciaService.obtenerDatos().subscribe(resp => {
      this.myExp = resp;
    });
  }


  delete(id?: number) {
    if (id != undefined) {
      this.experienciaService.delete(id).subscribe({
        next: () => {
          this.cargarExperiencia();
          window.location.reload();
        },
        error: () => {
          alert("No se pudo borrar la experiencia seleccionada.");
        }
      })
    }

  }
}
