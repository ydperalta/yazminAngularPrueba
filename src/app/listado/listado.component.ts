import { Component, OnInit } from '@angular/core';
import { ListadosService } from '../servicios/listados.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {
  listaReto:any
constructor(
  private listadoservice: ListadosService,
  private router:Router
){}
  ngOnInit(): void {
   this.listadoservice.getListado().subscribe((data)=> {

    try{
        this.listaReto=data;
      if(data.lenght>0){
        this.listaReto=data;

      }
    }
    catch{
      console.log("no trae datos genero una excepcion");
    }
   })
  }
  irDetalle(idReto:number){
    this.router.navigate(['/detalle/' + idReto]);
  }
}
