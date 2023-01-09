import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IniciarSesionComponent } from './components/iniciar-sesion/iniciar-sesion.component';
import { EditarBannerComponent } from './components/portfolio-editar/editar-banner/editar-banner.component';
import { EditarEducacionComponent } from './components/portfolio-editar/editar-educacion/editar-educacion.component';
import { EditarExperienciaComponent } from './components/portfolio-editar/editar-experiencia/editar-experiencia.component';
import { EditarProyectoComponent } from './components/portfolio-editar/editar-proyecto/editar-proyecto.component';
import { EditarSkillsComponent } from './components/portfolio-editar/editar-skills/editar-skills.component';
import { PortfolioComponent } from './components/portfolio-front/portfolio/portfolio.component';
import { NuevaEducacionComponent } from './components/portfolio-nuevo/nueva-educacion/nueva-educacion.component';
import { NuevaExperienciaComponent } from './components/portfolio-nuevo/nueva-experiencia/nueva-experiencia.component';
import { NuevaHabilidadComponent } from './components/portfolio-nuevo/nueva-habilidad/nueva-habilidad.component';
import { NuevoProyectoComponent } from './components/portfolio-nuevo/nuevo-proyecto/nuevo-proyecto.component';

const routes: Routes = [
  {path:'portfolio', component:PortfolioComponent},
  {path: 'login', component:IniciarSesionComponent},
  {path: 'editarbanner/:id', component:EditarBannerComponent},
  {path: 'crearexp', component:NuevaExperienciaComponent},
  {path: 'crearedu', component:NuevaEducacionComponent},
  {path: 'crearproyecto', component:NuevoProyectoComponent},
  {path: 'crearskill', component:NuevaHabilidadComponent},
  {path: 'editarexp/:id', component:EditarExperienciaComponent},
  {path: 'editareducacion/:id', component:EditarEducacionComponent},
  {path: 'editarproyecto/:id', component:EditarProyectoComponent},
  {path: 'editarskill/:id', component:EditarSkillsComponent},
  {path: '',redirectTo:'portfolio',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
