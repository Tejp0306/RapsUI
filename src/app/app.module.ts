import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxBootstrapIconsModule, allIcons } from 'ngx-bootstrap-icons';

import{FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import { CarouselComponent } from './carousel/carousel.component';
import { LayoutModule } from '@angular/cdk/layout';

import { LottieModule } from 'ngx-lottie';
import player from 'lottie-web';
import * as $ from 'jquery';
import { AboutusComponent } from './Navbarlinks/aboutus/aboutus.component';
import { HeaderComponent } from './Navbarlinks/header/header.component';
import { ContentComponent } from './Navbarlinks/content/content.component';
import { FooterComponent } from './Navbarlinks/footer/footer.component';
import { ContactusComponent } from './Navbarlinks/contactus/contactus.component';
import { ServicesComponent } from './Navbarlinks/services/services.component';
import { ItservicesComponent } from './Navbarlinks/itservices/itservices.component';
import { RapsteamComponent } from './Navbarlinks/rapsteam/rapsteam.component';
import { StaffingservicesComponent } from './Navbarlinks/staffingservices/staffingservices.component';
import { BlogsComponent } from './Navbarlinks/blogs/blogs.component';

@NgModule({
  declarations: [
    AppComponent,
    CarouselComponent,
    AboutusComponent,
    HeaderComponent,
    ContentComponent,
    FooterComponent,
    ContactusComponent,
    ServicesComponent,
    ItservicesComponent,
    RapsteamComponent,
    StaffingservicesComponent,
    BlogsComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NgxBootstrapIconsModule.pick(allIcons),
    FontAwesomeModule,
    LottieModule.forRoot({ player: playerFactory })
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  providers: [],
  bootstrap: [AppComponent],
 
})
export class AppModule { 
 
}


export function playerFactory() { // add this line
  return import('lottie-web'); // add this line
}

