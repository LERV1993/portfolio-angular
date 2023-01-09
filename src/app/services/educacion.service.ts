import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Educacion } from '../models/educacion.model'; 

@Injectable({
  providedIn: 'root'
})
export class EducacionService {
  URL = 'http://localhost:8080'

  constructor(private http:HttpClient) { }
  obtenerDatos(): Observable<any>{
  return this.http.get<Educacion>(this.URL+'/ver/educacion');
  }

  public detail(id:number):Observable<Educacion>{
    return this.http.get<Educacion>(this.URL+ `/educacion/${id}`);
  }
  public update(id:number, edu: Educacion):Observable<any>{
    return this.http.put<any>(this.URL+ `/modificar/educacion/${id}`,edu);
  }

  public save(educacion:Educacion): Observable<any>{
    return this.http.post<any>(this.URL + `/new/educacion`,educacion);
  }

  public delete(id:number): Observable<any>{
    return this.http.delete<any>(this.URL+ `/borrar/educacion/${id}`);
  }
}