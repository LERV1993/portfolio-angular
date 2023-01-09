import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Experiencia } from '../models/experiencia.model'; 

@Injectable({
  providedIn: 'root'
})
export class ExpService {
  URL = 'http://localhost:8080'

  constructor(private http:HttpClient) { }
  obtenerDatos(): Observable<any>{
  return this.http.get<Experiencia>( this.URL+'/ver/exp');
  }

  public lista():Observable<Experiencia[]>{
    return this.http.get<Experiencia[]>(this.URL+`ver/exp`)
  }

  public detail(id:number):Observable<Experiencia>{
    return this.http.get<Experiencia>(this.URL+ `/exp/${id}`);
  }
  public update(id:number, exp: Experiencia):Observable<any>{
    return this.http.put<any>(this.URL+ `/modificar/exp/${id}`,exp);
  }

  public save(experiencia:Experiencia): Observable<any>{
    return this.http.post<any>(this.URL + `/new/exp`,experiencia);
  }

  public delete(id:number): Observable<any>{
    return this.http.delete<any>(this.URL+ `/borrar/exp/${id}`);
  }
}