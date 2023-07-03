import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AboutusComponent} from './Navbarlinks/aboutus/aboutus.component';
import { Router } from '@angular/router';
import { ContentComponent } from './Navbarlinks/content/content.component';
import { FooterComponent } from './Navbarlinks/footer/footer.component';
 
const routes: Routes = [
  {
    path:'',redirectTo:'content',pathMatch:'full'
  },

  {
    path:'aboutus',
    component:AboutusComponent
  }
  ,
  {
    path:'content',
    component:ContentComponent
  },
  {
    path:'footer',
    component:FooterComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  constructor(
    public router: Router
  ) { }

}
