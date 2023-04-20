import { Component, OnInit } from '@angular/core';
import { NewsapiservicesService } from '../service/newsapiservices.service';

@Component({
  selector: 'app-tecnologia',
  templateUrl: './tecnologia.component.html',
  styleUrls: ['./tecnologia.component.css']
})
export class TecnologiaComponent implements OnInit {

  constructor(private _services:NewsapiservicesService) { }

    //displaydata
    tecnologiaDisplay:any = [];

  ngOnInit(): void {
    this._services.tecnologiaNoticias().subscribe((result)=>{
      console.log(result);
      this.tecnologiaDisplay = result.articles;
      

    })
  }

}
