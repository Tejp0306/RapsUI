import { Component,OnInit } from '@angular/core';
import { AnimationOptions ,} from "ngx-lottie";
// app.component.ts
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css'],
  template:`<ng-lottie [options]="contactus" (animationCreated)="animationCreated($event)"></ng-lottie>`
})
export class ContactusComponent implements OnInit {
  isPhonePortrait = false;
  contactus:AnimationOptions={
    path:"/assets/Contact-Us.json",
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
       // handle XSmall breakpoint
      }
      if (result.breakpoints[Breakpoints.Small]) {
        this.isPhonePortrait = true;
        console.log("small");
      }
      if (result.breakpoints[Breakpoints.Medium]) {
      // handle Medium breakpoint
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
