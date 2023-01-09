import { Component, OnInit } from '@angular/core';
import { ExpService } from 'src/app/services/experiencia.service';
import { Experiencia } from 'src/app/models/experiencia.model';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-nueva-experiencia',
  templateUrl: './nueva-experiencia.component.html',
  styleUrls: ['./nueva-experiencia.component.css']
})
export class NuevaExperienciaComponent implements OnInit {

  imagen: string = '';
  cargo: string = '';
  empresa: string = '';
  iniciofin: string = '';
  lugar: string = '';
  desc_1: string = '';
  desc_2: string = '';
  desc_3: string = '';
  desc_4: string = '';
  desc_5: string = '';

  expLab: Experiencia = null;

  isLogged = false;

  constructor(private experienciaService: ExpService,
    private router: Router,private tokenServ: TokenService
   ) { }
  ngOnInit(): void {
    if(this.tokenServ.getToken()){
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  
  }

  onCreate(): void {
    const expe = new Experiencia(this.imagen, this.cargo, this.empresa, this.iniciofin, this.lugar, this.desc_1, this.desc_2, this.desc_3, this.desc_4, this.desc_5);
    this.experienciaService.save(expe).subscribe({

      next: () => {
        alert("Experiencia añadida");
        this.router.navigate(['']);
      },
      error: () => {
        alert("No se pudo generar experiencia.");
        this.router.navigate(['']);
      }
    })
  }

}
