import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController, ToastController } from '@ionic/angular';
import { TravelAppService } from '../travel-app.service';
import * as firebase from 'firebase';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {


  name = "";
  email = "";
  password = "";

  constructor(
    private router: Router, 
    private travelAppService: TravelAppService,
    private toastCtrl: ToastController,
    private loadingController: LoadingController
  ) { }

  ngOnInit() {
  }


  fblogin(){
    this.loadingController.create({message:"Please wait"}).then((res) =>{
      res.present()
      this.travelAppService.facebookLogin().then((user:any) =>{
        this.checkIfUserExits(user.uid).then((isthereuser) =>{
            switch (isthereuser) {
              case true:
                this.router.navigateByUrl('/tabs');
                res.dismiss();
                break;
              case false:
                  this.travelAppService.generateInitialUserDetails(user.displayName, user.email, user.photoURL).then(() =>{
                    this.router.navigateByUrl('/tabs');
                    res.dismiss();
                  }).catch((err) =>{
                    this.presentToast(err)
                    res.dismiss()
                  })
                break;
            }
          }).catch((err) => {
            this.presentToast(err);
            console.log(err);
          });
      }).catch((err) =>{
        this.presentToast(err)
        res.dismiss()
      })
    }) 
  }

  googleLogin(){
    this.loadingController.create({message:"Please wait"}).then((res) =>{
      res.present()
      this.travelAppService.googleLogin().then((user:any) =>{
        this.checkIfUserExits(user.uid).then((isthereuser) =>{
            switch (isthereuser) {
              case true:
                this.router.navigateByUrl('/tabs');
                res.dismiss();
                break;
              case false:
                  this.travelAppService.generateInitialUserDetails(user.displayName, user.email, user.photoURL).then(() =>{
                    this.router.navigateByUrl('/tabs');
                    res.dismiss();
                  }).catch((err) =>{
                    this.presentToast(err)
                    res.dismiss()
                  })
                break;
            }
          }).catch((err) => {
            this.presentToast(err);
            console.log(err);
          });
      }).catch((err) =>{
        this.presentToast(err)
        res.dismiss()
      })
    })  
  }
  
  checkIfUserExits(userId) {
    return new Promise((resolve, reject) => {
      firebase.database().ref('/users').child(userId).once('value', (snapshot) => {
        var exists = (snapshot.val() !== null);
        resolve(exists)
      }).catch((err) => {
        reject(err);
      });
    });
  }

  register(){
    if(this.name == "" || this.name.length < 2){
      this.presentToast("First name field is either blank or too short")
    }else if(this.email == "" || this.email.length < 3 ||
     !this.email.includes('@') || !this.email.includes('.')){
      this.presentToast("Invalid email address")
    }else if(this.password == "" || this.password.length < 6){
      this.presentToast("Password name field is either blank or too short")
    }else{
      this.loadingController.create({
        message: 'Logging In',
      }).then((res) => {
        res.present();
        this.travelAppService.createnewuser(this.email, this.password).then(() =>{
          this.travelAppService.generateInitialUserDetails(this.name, this.email, "").then(() =>{
            res.dismiss();
            this.router.navigateByUrl('/tabs')
          }).catch((err) =>{
            res.dismiss()
            this.presentToast(err)
          })
        }).catch((err) =>{
          res.dismiss()
            this.presentToast(err)
        })
      });
    }
  }

  async presentToast(message) {
    const toast = await this.toastCtrl.create({
      message: message,
      duration: 2000,
      color: 'dark'
    });
    toast.present();
  }


}
