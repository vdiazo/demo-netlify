import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TopheadingComponent } from './topheading/topheading.component';
import { TecnologiaComponent } from './tecnologia/tecnologia.component';
import { PoliticaComponent } from './politica/politica.component';
import { NoticiasComponent } from './noticias/noticias.component';

const routes: Routes = [
  {path:'',component:TopheadingComponent},
  {path:'tecnologia',component:TecnologiaComponent},  
  {path:'politica',component:PoliticaComponent},    
  {path:'noticias/:id',component:NoticiasComponent},      

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
