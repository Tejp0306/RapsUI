import { Component ,OnInit,Input } from '@angular/core';
import { AnimationOptions ,} from "ngx-lottie";
import * as $ from 'jquery';
import {Router}  from '@angular/router';
//import icons from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  template: `
    <ng-lottie [options]="options" (animationCreated)="animationCreated($event)"></ng-lottie>,
    <ng-lottie [options]="spinner" (animationCreated)="animationCreated($event)"></ng-lottie>,
    <ng-lottie [options]="testimonial" (animationCreated)="animationCreated($event)"></ng-lottie>
    <ng-lottie [options]="contactus" (animationCreated)="animationCreated($event)"></ng-lottie>
  ` 
})

export class AppComponent implements OnInit {
  options: AnimationOptions = {
    path:"/assets/New-file.json", // download the JSON version of animation in your project directory and add the path to it like ./assets/animations/example.json
  };
  spinner: AnimationOptions = {
    path:"/assets/Spinnerupdated.json", // download the JSON version of animation in your project directory and add the path to it like ./assets/animations/example.json
  };
  testimonial: AnimationOptions = {
    path:"/assets/Testimonial.json",
  };
  contactus:AnimationOptions={
    path:"/assets/Contact-Us.json",
  };
  public gfg = false;
  name = 'Rapscorp';  
  isJqueryWorking: any;  
  ngOnInit()  
  {  
    $(document).ready(() => {  
        this.isJqueryWorking = 'working !!!';  
    });  
  }  

  constructor(public router:Router){}

  gotopage(pageName:string):void{
    this.router.navigate([`${pageName}`])
  }
}

