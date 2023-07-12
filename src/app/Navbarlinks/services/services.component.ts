import { Component } from '@angular/core';
import { AnimationOptions ,} from "ngx-lottie";
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent {
  isPhonePortrait = false;
  options: AnimationOptions = {
    path:"/assets/New-file.json", // download the JSON version of animation in your project directory and add the path to it like ./assets/animations/example.json
    
  };
  constructor(public breakpointObserver: BreakpointObserver) { }
  ngOnInit() {
    this.breakpointObserver.observe([
      Breakpoints.XSmall,
      Breakpoints.Small,
      Breakpoints.Medium,
      Breakpoints.Large,
      Breakpoints.XLarge
    ]).subscribe(result => {

      this.isPhonePortrait = false; 
      if (result.breakpoints[Breakpoints.XSmall]) {
        this.isPhonePortrait = true;
        console.log("small");
      }
      if (result.breakpoints[Breakpoints.Small]) {
       
      }
      if (result.breakpoints[Breakpoints.Medium]) {
       
      }
      if (result.breakpoints[Breakpoints.Large]) {
        // handle Large breakpoint
      }
      if (result.breakpoints[Breakpoints.XLarge]) {
        // handle XLarge breakpoint
      }
    });
  }
}
