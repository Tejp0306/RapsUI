import { Component } from '@angular/core';
import { AnimationOptions ,} from "ngx-lottie";
@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css'],
  template:`<ng-lottie [options]="contactus" (animationCreated)="animationCreated($event)"></ng-lottie>`
})
export class ContactusComponent {
  contactus:AnimationOptions={
    path:"/assets/Contact-Us.json",
  };
}
