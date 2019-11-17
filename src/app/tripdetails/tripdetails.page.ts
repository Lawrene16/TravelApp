import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';

@Component({
  selector: 'app-tripdetails',
  templateUrl: './tripdetails.page.html',
  styleUrls: ['./tripdetails.page.scss'],
})
export class TripdetailsPage implements OnInit {

  data;

  constructor(
    public route: ActivatedRoute,
    public router: Router,
    public socialSharing: SocialSharing
  ) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.data = this.router.getCurrentNavigation().extras.state.trip;
      }
    });
  }

  shareTrip(){

    // console.log(this.data.photo)
    var msg = this.compilemsg();
    this.socialSharing.share(msg, null, null, null);

  }


  compilemsg(): string {
    var msg = this.data.eventTitle + " \n" +
    "@ " + this.data.city + ", " + this.data.province + " \n" + 
    "From " + this.data.fromDate + " to " + this.data.toDate + " \n" + " \n" + 
    this.data.aboutTrip + " \n" + " \n" + 
    "You can can check out my cool photo here" + " \n" + " \n" + 
    this.data.photo;
    // return msg.concat(" \n Sent from my Awesome App !" + " \n " + this.refernumber);
    return msg;

  }



}
