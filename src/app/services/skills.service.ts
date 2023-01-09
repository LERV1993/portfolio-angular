import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Skills } from '../models/skills.model'; 

@Injectable({
  providedIn: 'root'
})
export class SkillsService {

  URL = 'https://portfoliobackend-java-production.up.railway.app';

  constructor(private http:HttpClient) { }
  obtenerDatos(): Observable<any>{
  return this.http.get<Skills>(this.URL+'/ver/habilidades');
  }

  public detail(id:number):Observable<Skills>{
    return this.http.get<Skills>(this.URL+ `/ver/habilidad/${id}`);
  }
  public update(id:number, habilidad: Skills):Observable<any>{
    return this.http.put<any>(this.URL+ `/actualizar/habilidad/${id}`,habilidad);
  }

  public save(habilidad:Skills): Observable<any>{
    return this.http.post<any>(this.URL + `/new/habilidad`,habilidad);
  }

  public delete(id:number): Observable<any>{
    return this.http.delete<any>(this.URL+ `/borrar/habilidad/${id}`);
  }
}