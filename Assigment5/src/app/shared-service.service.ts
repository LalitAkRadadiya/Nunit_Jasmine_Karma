import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedServiceService {

  constructor() { }
  isPositive:boolean=false;
  doPositive(){
    this.isPositive=true;
    return true;
  }
  ispositive():boolean{
    return this.isPositive;
  }
  donegative(){
    this.isPositive=false;
    return true;
  }
  isnagative(){
    return !this.isPositive;
  }
  
}
