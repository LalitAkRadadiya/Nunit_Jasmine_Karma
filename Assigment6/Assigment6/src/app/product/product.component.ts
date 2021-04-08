import { Component, OnInit } from '@angular/core';
import { SharedService } from '../SharedService/shared.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  constructor(private service: SharedService) { }

  ngOnInit(): void {
  }
  async GetAllPosts(){
    return (await this.service.getPosts()).subscribe(val => console.log(val));
  }
  
  async GetSinglePost(id:number){
    return (await this.service.getPost(id)).subscribe(val => console.log(val));
  }
  async addPost(model){
    return await this.service.addPost();
  }
  async updatePost(model){
    return await this.service.updatePost();
  }
  async deletePost(id:number){
    return (await this.service.deletePost(id)).subscribe(val => console.log(val));
  }

}
