import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Banner } from '../models/banner.model'; 

@Injectable({
  providedIn: 'root'
})
export class BannerService {
  URL = 'https://portfoliobackend-java-production.up.railway.app'

  constructor(private http:HttpClient) { }
  obtenerDatos(): Observable<any>{
  return this.http.get<Banner>(this.URL+'/ver/banner');
  }

  public update(id:number, banner: Banner):Observable<any>{
    return this.http.put<any>(this.URL+ `/modificar/banner/${id}`,banner);
  }

  public detail(id:number):Observable<Banner>{
    return this.http.get<Banner>(this.URL+ `/banner/${id}`);
  }

  public delete(id:number): Observable<any>{
    return this.http.delete<any>(this.URL+ `/borrar/banner/${id}`);
  }
}
