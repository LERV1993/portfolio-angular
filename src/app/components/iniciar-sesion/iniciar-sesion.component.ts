import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginUsuario } from 'src/app/models/login-usuario';
import { AuthService } from 'src/app/services/auth.service';
import { TokenService } from 'src/app/services/token.service';


@Component({
  selector: 'app-iniciar-sesion',
  templateUrl: './iniciar-sesion.component.html',
  styleUrls: ['./iniciar-sesion.component.css']
})
export class IniciarSesionComponent implements OnInit {
  isLogged = false;
  isLogginFail = false;
  loginUsuario!: LoginUsuario;
  nombreUsuario!: string;
  password!:string;
  roles: string[] = [];
  errMsj!:string;


  form:FormGroup;
  constructor(private formBuilder:FormBuilder, 
              private tokenService: TokenService,
              private authService:AuthService,
              private router: Router) {
    this.form=this.formBuilder.group({

      nombreUsuario:['',[Validators.required,Validators.minLength(7)]],
      password:['',[Validators.required,Validators.minLength(7)]],
      deviceInfo:this.formBuilder.group({
      })

    });
   }

  ngOnInit(): void {
    if(this.tokenService.getToken()){
      this.isLogged = true;
      this.isLogginFail = false;
      this.roles = this.tokenService.getAuthorities();

    }
  }
  get NombreUsuario()
  {
    return this.form.get('nombreUsuario');
  }

  get Password()
  {
    return this.form.get('password');
  }

  onLoggin():void{
      this.loginUsuario = new LoginUsuario(this.NombreUsuario?.value, this.Password?.value);
       this.authService.login(this.loginUsuario).subscribe({
        next: (data) => { 
          this.isLogged = true;
          this.isLogginFail = false;
          this.tokenService.setToken(data.token);
          this.tokenService.setUserName(data.nombreUsuario);
          this.tokenService.setAuthorities(data.authorities);
          this.roles = data.authorities;
          this.router.navigate(['']) }, // completeHandler
        error: err => {         
          this.isLogged = false;
          this.isLogginFail = true;
          this.errMsj = err.error.mensaje;
          console.log(this.errMsj) },    // errorHandler 
      });
  }
}
