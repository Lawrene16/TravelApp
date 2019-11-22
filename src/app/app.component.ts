import { Component } from '@angular/core';
import * as firebase from "firebase";

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { TravelAppService } from './travel-app.service';
import { Router } from '@angular/router';
// import { TravelAppService } from '../tr'
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'Profile',
      url: '/profile',
      icon: 'person'
    },
    {
      title: 'Logout',
      url: '/login',
      icon: 'log-out'
    }
  ];

  constructor(
    private platform: Platform,
    public travelAppService: TravelAppService,
        private router: Router,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  checkPage(p){
    if(p.title == "Logout"){
      firebase.auth().signOut().then(() =>{
        this.router.navigateByUrl(p.url)
      })
      console.log("ressss")
    }else{
      this.router.navigateByUrl(p.url)
    }
  }
}
