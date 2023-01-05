import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {FormGroup, FormControl, Validators} from '@angular/forms'
// import { endWith } from 'rxjs';



@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css']
})
export class Page1Component {

  loginForm = new FormGroup({
    user: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('')
  })

  constructor(private router: Router){}
  // This is intialization - GLOBAL
email= '';
password=  '';
  errorMessage = '';
  errorMessage2 = '';
  ngOnInit(){
  const email = 'test email';
  console.log(email,this.email)

  }

  btnClick(event:any){
    event.preventDefault()
    console.log(event.target.firstName.value, event.target.pass.value);
    this.email = event.target.firstName.value;
    this.password = event.target.pass.value;
    if (this.email === '') {
      // alert('Email/Password field cannot be blank');
      this.errorMessage = 'Email/Password field cannot be blank'
    }
    else if (this.email) {
      var check = false
      for (var i = 0; i < this.email.length; i = i + 1) {
        if (this.email.charAt(i) === '@') {
          check = true
        }
      }
      if (!check) {
        // alert('Invalid Email found!')
        this.errorMessage = 'invalid email found!!!'
      } else if (!this.email.endsWith('.com')) {
        // alert('Woops! invalid email')
        this.errorMessage = 'Woops! invalid email'
      }
    else if ( this.password === ''){
      this.errorMessage2 = 'Password field should not be empty'
    }
    else if (this.password.length < 6 ) {
      // alert('Password should be strong i.e more than 6 length')
      this.errorMessage2 = 'password should be in 6 charecter'
    } else { 
        this.router.navigate(['/page2'], { queryParams: { user: event.target.firstName.value } });

      }

      // console.log('line 54')

    }
  
   }
   

    // user(data:any){
    //   console.log(data)
    // }
  }
