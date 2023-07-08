import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AboutusComponent} from './Navbarlinks/aboutus/aboutus.component';
import { Router } from '@angular/router';
import { ContentComponent } from './Navbarlinks/content/content.component';
import { FooterComponent } from './Navbarlinks/footer/footer.component';
import { ContactusComponent } from './Navbarlinks/contactus/contactus.component';
import { ServicesComponent } from './Navbarlinks/services/services.component';
 
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
  },
  {
    path:'contactus',
    component:ContactusComponent
  },
  {
    path:'services',
    component:ServicesComponent
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
