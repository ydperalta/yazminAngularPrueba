import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ListadosService } from '../servicios/listados.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {
  idReto:any
  detalle:any
  constructor(private rutaActiva:ActivatedRoute,
    private router:Router,
    private listadoservice: ListadosService){}

  ngOnInit(){
    this.detalle={'reto':''}
    let id= this.rutaActiva.snapshot.params['id'];
    this.idReto=id;
    this.getDetalle(id);
  }
  getDetalle(id:number){
    this.listadoservice.getDetalle(id).subscribe((data)=> {

      try{
        this.detalle=data;        
      }
      catch{
        console.log("no trae detalle genero una excepcion");
      }
     })
  }
  regresar(){
    this.router.navigate(['/listado']);
  }
}
