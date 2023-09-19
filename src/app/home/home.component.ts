import { Component } from '@angular/core';
import { UserService } from '../Service/user.service';
import { product } from '../Interface/brands';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent {

  productsArray: product[] = []

  constructor(private _userservice: UserService) {
    this._userservice.getData().subscribe((req) => {
      this.productsArray = req.data
    })
  }

}
