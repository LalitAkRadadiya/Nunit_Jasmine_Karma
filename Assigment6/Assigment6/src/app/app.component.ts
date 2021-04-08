import { Component } from '@angular/core';
import { ProductService } from './SharedService/product.service';
import { Product } from './SharedService/productModel'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Assigment6';
  constructor(private service:ProductService){}

  async GetAllProducts():Promise<Product[]>{
    return await this.service.getProducts();
  }
  async GetSingleProduct(id:number):Promise<Product>{
    return await this.service.getProduct(id);
  }
  async AddProduct(model:Product):Promise<Product[]>{
    return await this.service.createProduct({id:5,category:"electrinics",productName:"Mouse",price:1200});
  }
  async UpdateProduct(model:Product):Promise<Product[]>{
    return await this.service.updateProduct({id:3,category:"electrinics",productName:"Smart Pen",price:1000})
  }
  async RemoveProduct(id:number):Promise<Product[]>{
    return await this.service.deleteProduct(id);
  }
}
