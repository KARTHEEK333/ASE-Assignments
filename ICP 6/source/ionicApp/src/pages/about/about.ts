import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {ContactPage} from "../contact/contact";

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
   pswrd : string
  cpswrd: string
  constructor(public navCtrl: NavController) {

  }
signup()
{
  if(this.pswrd==this.cpswrd)
  {
    this.navCtrl.push(ContactPage)
  }
}
}
