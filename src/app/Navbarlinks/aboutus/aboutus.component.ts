import { Component } from '@angular/core';
import { AnimationOptions ,} from "ngx-lottie";

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})


export class AboutusComponent {
  options: AnimationOptions = {
    path:"/assets/aboutspin.json", // download the JSON version of animation in your project directory and add the path to it like ./assets/animations/example.json
  };



}
