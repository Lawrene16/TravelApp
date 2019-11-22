import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouteReuseStrategy } from "@angular/router";

import { IonicModule, IonicRouteStrategy } from "@ionic/angular";
import { SplashScreen } from "@ionic-native/splash-screen/ngx";
import { StatusBar } from "@ionic-native/status-bar/ngx";

// import { Crop } from "@ionic-native/crop/ngx";
// import { ImagePicker } from "@ionic-native/image-picker/ngx";
// import { Facebook } from "@ionic-native/facebook/ngx";
import { GooglePlus } from "@ionic-native/google-plus/ngx";
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { AngularFireModule } from "angularfire2";
import * as firebase from "firebase";
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";

var firebaseconfig = {
  apiKey: "AIzaSyCkvYY31eCJguhDl63ADJu16l7qGkK7l7w",
  authDomain: "jahztravelapp.firebaseapp.com",
  databaseURL: "https://jahztravelapp.firebaseio.com",
  projectId: "jahztravelapp",
  storageBucket: "jahztravelapp.appspot.com",
  messagingSenderId: "970318906848",
  appId: "1:970318906848:web:979a198774cac488d79785"
};

firebase.initializeApp(firebaseconfig);

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    HttpClientModule,
    AngularFireModule.initializeApp(firebaseconfig),
    AppRoutingModule
  ],
  providers: [
    StatusBar,
    GooglePlus,
    SplashScreen,
    Camera,
    Geolocation,
    // Crop,
    SocialSharing,
    // Facebook,
    // ImagePicker,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
