import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NewPlacePage } from '../pages/new-places/new-places';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  onLoadNewPlace() {
  	this.navCtrl.push(NewPlacePage);
  }

}
