import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {AboutPage} from "../about/about";
import {ContactPage} from "../contact/contact";

// @ts-ignore
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
login()
{
  this.navCtrl.push(ContactPage)
}
register()
{
  this.navCtrl.push(AboutPage)
}
}
