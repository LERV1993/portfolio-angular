import { Component, OnInit } from '@angular/core';
import { EducacionService } from 'src/app/services/educacion.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
  public myEducacion: any = [];
  isLogged = false

  constructor(private educacionService: EducacionService,
    private tokenService: TokenService) { }

  ngOnInit(): void {
    this.cargarEducacion();

    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarEducacion(): void {
    this.educacionService.obtenerDatos().subscribe(resp => {
      this.myEducacion = resp;
    });
  }

  delete(id?: number) {
    if (id != undefined) {
      this.educacionService.delete(id).subscribe({
        next: () => {
          this.cargarEducacion();
          window.location.reload();
        },
        error: () => {
          alert("No se pudo borrar la educación seleccionada.");
        }
      })
    }
  }
}
