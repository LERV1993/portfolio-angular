import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Proyecto } from '../models/proyecto.model'; 

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {

  URL = 'https://portfoliobackend-java-production.up.railway.app';

  constructor(private http:HttpClient) { }
  obtenerDatos(): Observable<any>{
  return this.http.get<Proyecto>(this.URL+'/ver/proyectos');
  }

  public detail(id:number):Observable<Proyecto>{
    return this.http.get<Proyecto>(this.URL+ `/proyecto/${id}`);
  }
  public update(id:number, proyecto: Proyecto):Observable<any>{
    return this.http.put<any>(this.URL+ `/modificar/proyecto/${id}`,proyecto);
  }

  public save(proyecto:Proyecto): Observable<any>{
    return this.http.post<any>(this.URL + `/new/proyecto`,proyecto);
  }

  public delete(id:number): Observable<any>{
    return this.http.delete<any>(this.URL+ `/borrar/proyecto/${id}`);
  }
}