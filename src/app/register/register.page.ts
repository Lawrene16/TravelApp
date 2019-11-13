import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController, ToastController } from '@ionic/angular';
import { TravelAppService } from '../travel-app.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {


  firstname = "";
  lastname = "";
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
      res.present();
      this.travelAppService.facebookLogin().then(() =>{
        this.router.navigateByUrl('/tabs');
        res.dismiss()
      }).catch((err) =>{
        console.log(err)
        res.dismiss()
      })
    })
  }

  googleLogin(){
    this.loadingController.create({message:"Please wait"}).then((res) =>{
      res.present()
      this.travelAppService.googleLogin().then(() =>{
        this.router.navigateByUrl('/tabs');
        res.dismiss();
      }).catch((err) =>{
        console.log(err)
        res.dismiss()
      })
    })  
    
  }
  
  register(){
    if(this.firstname == "" || this.firstname.length < 2){
      this.presentToast("First name field is either blank or too short")
    }else if(this.lastname == "" || this.lastname.length < 2){
      this.presentToast("Last name field is either blank or too short")
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
        this.travelAppService.createnewuser(this.firstname, this.lastname, this.email, this.password).then(() =>{
          res.dismiss();
          this.router.navigateByUrl('/tabs')
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
