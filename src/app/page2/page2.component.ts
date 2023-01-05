import { Component, enableProdMode } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.css']
})
export class Page2Component {
  firstName:string = '';

  constructor(private router: ActivatedRoute){

  }

  ngOnInit(){
    enableProdMode()
    // @ts-ignore
    // console.log('hey am tester', this.router.queryParams.value.user)
// @ts-ignore
this.firstName = this.router.queryParams.value.user;
console.log(this.firstName)
  }
  formData(data:any){
    console.log(data)
  }
}
