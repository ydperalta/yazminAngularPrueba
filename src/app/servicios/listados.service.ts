import { Injectable } from '@angular/core';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class ListadosService {

  constructor(
    protected http: HttpService
  ) { }

  public getListado(){
    return this.http.get<any>('/dashboard/socios/1/retos?estatus=activo');
  }

  public getDetalle(idReto:any){
    return this.http.get<any>('/retos/'+idReto);
  }
}
