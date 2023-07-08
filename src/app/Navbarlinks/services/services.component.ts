import { Component } from '@angular/core';
import { AnimationOptions ,} from "ngx-lottie";

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent {
  options: AnimationOptions = {
    path:"/assets/New-file.json", // download the JSON version of animation in your project directory and add the path to it like ./assets/animations/example.json
  };
}
