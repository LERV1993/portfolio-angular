import { Component, OnInit } from '@angular/core';
import { TokenService } from 'src/app/services/token.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Banner } from 'src/app/models/banner.model';
import { BannerService } from 'src/app/services/banner.service';

@Component({
  selector: 'app-editar-banner',
  templateUrl: './editar-banner.component.html',
  styleUrls: ['./editar-banner.component.css']
})
export class EditarBannerComponent implements OnInit {

  banner: Banner = null;
  isLogged = false;

  constructor(private tokenService: TokenService,
    private bannerService: BannerService,
    private activatedRouter: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.bannerService.detail(id).subscribe({
      next: (data) => {
        this.banner = data
      },
      error: () => {
        alert('Error al modificar experiencia')
      }
    })

    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  onUpdate(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    console.log(this.banner)
    this.bannerService.update(id, this.banner).subscribe({
      next: () => {
        this.router.navigate(['']);
      },
      error: () => {
        alert('Error al modificar experiencia');
      }
    })
  }

}
