import { Component, OnInit } from '@angular/core';
import { BannerService } from 'src/app/services/banner.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {
  public myBanner: any = [];
  isLogged = false

  constructor(private bannerService: BannerService,
    private tokenService: TokenService) { }

  ngOnInit(): void {
    this.cargarBanner();

    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarBanner(): void {
    this.bannerService.obtenerDatos().subscribe(resp => {
      this.myBanner = resp[0];
    });
  }

  delete(id?: number) {
    if (id != undefined) {
      this.bannerService.delete(id).subscribe({
        next: () => {
          this.cargarBanner();
          window.location.reload();
        },
        error: (err) => {
          alert("No se pudo borrar el banner");
        }
      })
    }
  }
}