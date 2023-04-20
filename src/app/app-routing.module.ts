import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TopheadingComponent } from './topheading/topheading.component';
import { TecnologiaComponent } from './tecnologia/tecnologia.component';
import { PoliticaComponent } from './politica/politica.component';
import { EconomiaComponent } from './economia/economia.component';
import { DeporteComponent } from './deporte/deporte.component';
import { UltimasComponent} from './ultimas/ultimas.component';

import { NoticiasComponent } from './noticias/noticias.component';

const routes: Routes = [
  {path:'',component:UltimasComponent},
  {path:'tecnologia',component:TecnologiaComponent},  
  {path:'politica',component:PoliticaComponent},    
  {path:'economia',component:EconomiaComponent},      
  {path:'deporte',component:DeporteComponent},        
  {path:'noticias/:id',component:NoticiasComponent},      

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
