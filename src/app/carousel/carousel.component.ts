import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent {
  public slides = [
    { src: "C:\Users\Administrator\Desktop\office photo\DSC_8342.JPG" },
    { src: "C:\Users\Administrator\Desktop\office photo\DSC_8341.JPG" },
    
  ];
 constructor(){}
}
