import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsapiservicesService {

  constructor(private _http:HttpClient) {  }

  //newapiurl
  newsApiUrl = "https://newsapi.org/v2/top-headlines?country=us&apiKey=cb68ef0caae2441eb7627f5c13881173";
  tecnologiaApiUrl = "https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=cb68ef0caae2441eb7627f5c13881173";  
  politicaApiUrl = "http://jellyfish-app-24xy9.ondigitalocean.app/api/noticias?populate=fotoPrincipal";    
  noticiaApiUrl = "http://jellyfish-app-24xy9.ondigitalocean.app/api/noticias?filters[slug][$eq]=";    


  topHeading():Observable<any>{
    return this._http.get(this.newsApiUrl);
  }

  tecnologiaNoticias():Observable<any>{
    return this._http.get(this.tecnologiaApiUrl);
  }

  politicaNoticias():Observable<any>{
    return this._http.get(this.politicaApiUrl);
  }  

  detalleNoticia(slug:any):Observable<any>{
    let url= this.noticiaApiUrl + slug + "&populate=*";
    return this._http.get(url);
  }    
      
}
