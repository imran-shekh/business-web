import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css']
})
export class Page1Component {

  constructor(private router: Router){}

  ngOnInit(){

  }

  btnClick(event:any){
    event.preventDefault()
    this.router.navigate(['/page2'],
    {queryParams: {user: event.target.firstName.value}});

  }
}
