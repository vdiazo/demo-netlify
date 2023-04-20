import { Component, OnInit } from '@angular/core';
import { NewsapiservicesService } from '../service/newsapiservices.service';
@Component({
  selector: 'app-economia',
  templateUrl: './economia.component.html',
  styleUrls: ['./economia.component.css']
})
export class EconomiaComponent implements OnInit {

  constructor(private _services:NewsapiservicesService) { }
  
  //displaydata
  economiaDisplay:any = [];  

  ngOnInit(): void {
    this._services.economiaNoticias().subscribe((result)=>{
      console.log(result);
      console.log(result.data[0].attributes.seccion.data.attributes.nombre);

      this.economiaDisplay = result.data.filter((el: any)=>el.attributes.seccion.data.attributes.nombre == "Economía");

      //this.economiaDisplay = result.data;
      

    })
  }

}
