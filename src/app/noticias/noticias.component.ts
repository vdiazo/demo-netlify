import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NewsapiservicesService } from '../service/newsapiservices.service';


@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.css']
})
export class NoticiasComponent implements OnInit {

  //id: string;
  id:any;
  constructor(private route: ActivatedRoute,private _services:NewsapiservicesService) { 
    //this.id = this.route.snapshot.params;
    this.id = this.route.snapshot.paramMap.get("id");
    this.noticiaDisplay = {};

  }

  
  //displaydata
  noticiaDisplay:any;  

  ngOnInit(): void {

    console.log("id");
    console.log(this.id);

    this._services.detalleNoticia(this.id).subscribe((result)=>{
      this.noticiaDisplay = result.data[0].attributes;
      console.log(this.noticiaDisplay);                 
  })


    //this.getNoticia();

  }

  async getNoticia() {
    let occupation: any;

      occupation = await this._services.detalleNoticia(this.id).subscribe((result)=>{
              this.noticiaDisplay = result.data[0].attributes;
              console.log(this.noticiaDisplay);                 
          })
          
      console.log("occupation");
      console.log(occupation);
                
  }  

}
