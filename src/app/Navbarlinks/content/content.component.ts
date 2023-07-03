import { Component } from '@angular/core';
import { AnimationOptions ,} from "ngx-lottie";

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent {
  options: AnimationOptions = {
    path:"/assets/New-file.json", // download the JSON version of animation in your project directory and add the path to it like ./assets/animations/example.json
  };
  spinner: AnimationOptions = {
    path:"/assets/Spinnerupdated.json", // download the JSON version of animation in your project directory and add the path to it like ./assets/animations/example.json
  };
  testimonial: AnimationOptions = {
    path:"/assets/Testimonial.json",
  };
  public slides = [
    { src: "C:\Users\Administrator\Desktop\office photo\DSC_8342.JPG" },
    { src: "C:\Users\Administrator\Desktop\office photo\DSC_8341.JPG" },
    
  ];
  public gfg = false;
 
}
