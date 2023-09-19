import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms'
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent {

  registerationForm: FormGroup = new FormGroup({
    name: new FormControl(null, [Validators.minLength(3), Validators.maxLength(10), Validators.required]),
    email: new FormControl(null, [Validators.email, Validators.required]),
    password: new FormControl(null, [Validators.pattern(/[A-Z]{1}[a-z0-9]{6,18}/), Validators.required]),
    rePassword: new FormControl(null, [Validators.pattern(/[A-Z]{1}[a-z0-9]{6,18}/), Validators.required]),
    phone: new FormControl(null, [Validators.pattern(/01[0125][0-9]{8}/), Validators.required]),
  })

  wel(x: any) {
    console.log(x);
  }
  
}
