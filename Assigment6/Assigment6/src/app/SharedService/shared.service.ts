import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor(private httpcliet: HttpClient) { }

  add = {id:3,userId:1,title:"ram",body:"raja"}
  update =  {id:2,userId:1,title:"ram",body:"raja"}

  
  async getDatas(): Promise<Observable<any>>{
    return this.httpcliet.get(`https://jsonplaceholder.typicode.com/posts`);
  }

  async getData(id:number): Promise<Observable<any>> {
    return this.httpcliet.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
  }

  async addData(): Promise<Observable<any>> {
   return this.httpcliet.post(`https://jsonplaceholder.typicode.com/posts`,this.add);
  }

  async updateData(): Promise<Observable<any>>{
    return this.httpcliet.put(`https://jsonplaceholder.typicode.com/posts/2`,this.update);
  }
  async deleteData(id:number): Promise<Observable<any>>{
    return this.httpcliet.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);
  }
}
