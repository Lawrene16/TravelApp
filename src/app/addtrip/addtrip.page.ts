import { Component } from '@angular/core';

@Component({
  selector: 'app-addtrip',
  templateUrl: './addtrip.page.html',
  styleUrls: ['./addtrip.page.scss'],
})
export class AddtripPage {

  bla = "";
  constructor() { }


  validateButton(event){
    console.log(event)
  }

  
}
