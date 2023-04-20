import { Component, OnInit } from '@angular/core';
import { NewsapiservicesService } from '../service/newsapiservices.service';

@Component({
  selector: 'app-deporte',
  templateUrl: './deporte.component.html',
  styleUrls: ['./deporte.component.css']
})
export class DeporteComponent implements OnInit {

  constructor(private _services:NewsapiservicesService) { }
  
  //displaydata
  economiaDisplay:any = [];  

  ngOnInit(): void {
    this._services.economiaNoticias().subscribe((result)=>{
      console.log(result);
      console.log(result.data[0].attributes.seccion.data.attributes.nombre);

      this.economiaDisplay = result.data.filter((el: any)=>el.attributes.seccion.data.attributes.nombre == "Deporte");

      //this.economiaDisplay = result.data;
      

    })
  }

}
