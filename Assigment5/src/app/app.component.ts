import { Component } from '@angular/core';
import { SharedServiceService } from './shared-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Assigment5';
  constructor(private service : SharedServiceService) {}
  ngOnInit(): void {
  }

  doPositive(){
    
    console.log(this.service.doPositive());
    return this.service.doPositive();
  }
  isAlreadyPositive():boolean{
    return this.service.ispositive();
  }
  donegative():boolean{
    return this.service.donegative();
  }
  isAlreadyNegative():boolean{
    return this.service.isnagative();
  }

}
