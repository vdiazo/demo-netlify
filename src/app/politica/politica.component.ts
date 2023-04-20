import { Component, OnInit } from '@angular/core';
import { NewsapiservicesService } from '../service/newsapiservices.service';

@Component({
  selector: 'app-politica',
  templateUrl: './politica.component.html',
  styleUrls: ['./politica.component.css']
})
export class PoliticaComponent implements OnInit {

  constructor(private _services:NewsapiservicesService) { }

  //displaydata
  politicaDisplay:any = [];  

  ngOnInit(): void {
    this._services.politicaNoticias().subscribe((result)=>{
      console.log(result);
      
      this.politicaDisplay = result.data.filter((el: any)=>el.attributes.seccion.data.attributes.nombre == "Política");
      //this.politicaDisplay = result.data;
      

    })
  }

}
