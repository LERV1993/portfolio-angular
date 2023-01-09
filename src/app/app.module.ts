import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from "./app.component";
import { NavBarComponent } from './components/portfolio-front/nav-bar/nav-bar.component';
import { BannerComponent } from './components/portfolio-front/banner/banner.component';
import { ExperienceComponent } from './components/portfolio-front/experience/experience.component';
import { EducationComponent } from './components/portfolio-front/education/education.component';
import { SkillsComponent } from './components/portfolio-front/skills/skills.component';
import { ProjectsComponent } from './components/portfolio-front/projects/projects.component';
import { FooterComponent } from './components/portfolio-front/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { IniciarSesionComponent } from './components/iniciar-sesion/iniciar-sesion.component';
import { PortfolioComponent } from './components/portfolio-front/portfolio/portfolio.component'
import { ReactiveFormsModule } from '@angular/forms';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { InterceptorProvider } from './services/intercerptor-service';
import { EditarExperienciaComponent } from './components/portfolio-editar/editar-experiencia/editar-experiencia.component';
import { EditarEducacionComponent } from './components/portfolio-editar/editar-educacion/editar-educacion.component';
import { EditarSkillsComponent } from './components/portfolio-editar/editar-skills/editar-skills.component';
import { FormsModule } from '@angular/forms';
import { NuevaExperienciaComponent } from './components/portfolio-nuevo/nueva-experiencia/nueva-experiencia.component';
import { EditarBannerComponent } from './components/portfolio-editar/editar-banner/editar-banner.component';
import { NuevaEducacionComponent } from './components/portfolio-nuevo/nueva-educacion/nueva-educacion.component';
import { NuevaHabilidadComponent } from './components/portfolio-nuevo/nueva-habilidad/nueva-habilidad.component';
import { NuevoProyectoComponent } from './components/portfolio-nuevo/nuevo-proyecto/nuevo-proyecto.component';
import { EditarProyectoComponent } from './components/portfolio-editar/editar-proyecto/editar-proyecto.component';


@NgModule({
    declarations: [
        AppComponent,
        NavBarComponent,
        BannerComponent,
        ExperienceComponent,
        EducationComponent,
        SkillsComponent,
        ProjectsComponent,
        FooterComponent,
        IniciarSesionComponent,
        PortfolioComponent,
        EditarExperienciaComponent,
        EditarEducacionComponent,
        EditarSkillsComponent,
        NuevaExperienciaComponent,
        EditarBannerComponent,
        NuevaEducacionComponent,
        NuevaHabilidadComponent,
        NuevoProyectoComponent,
        EditarProyectoComponent
    ],
    providers: [
        InterceptorProvider
    ],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        ReactiveFormsModule,
        NgCircleProgressModule.forRoot({}),
        FormsModule
    ]
})
export class AppModule { }
