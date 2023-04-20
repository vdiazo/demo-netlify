import { Component, OnInit } from '@angular/core';
import { NewsapiservicesService } from '../service/newsapiservices.service';

@Component({
  selector: 'app-ultimas',
  templateUrl: './ultimas.component.html',
  styleUrls: ['./ultimas.component.css']
})
export class UltimasComponent implements OnInit {

  constructor(private _services:NewsapiservicesService) { }

    //displaydata
    noticiaDisplay:any = [];  

  ngOnInit(): void {
    this._services.Noticias().subscribe((result)=>{
      console.log(result);
      this.noticiaDisplay = result.data;
      

    })
  }
}
