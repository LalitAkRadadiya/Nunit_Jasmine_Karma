import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { ProductService } from './SharedService/product.service';

describe('AppComponent', () => {

  let component: AppComponent;
  let service: ProductService;

  beforeEach(() => {
    service = new ProductService();
    component = new AppComponent(service);
  });
  afterEach(() => {
    service = null;
    component = null;
  });

  it('should call GetAllProducts()', (done) => {

    //Arrange
    let record: number = 4;

    // Act
    component.GetAllProducts().then((data) => {

      // Assert
      expect(data.length).toEqual(record);
      done();
    });
  });

  it('should call GetSingleProduct(2)', (done) => {

    // Act
    component.GetSingleProduct(2).then((data) => {

      // Assert
      expect(data).toBeTruthy();
      done();
    });

  });

  it('should call AddProduct() with data', (done) => {
    
    //Arrange
    let record: number = 5;

    // Act
    component.AddProduct({id:20,category:"sports",price:3000,productName:"Watch"}).then((data) => {

      // Assert
      expect(data.length).toEqual(record);
      done();
    });

  });

  it('should call updateProduct() with data', (done) => {
    
    //Arrange
    let record: number = 4;

    // Act
    component.UpdateProduct({id:2,category:"sports",price:3000,productName:"Watch"}).then((data) => {

      // Assert
      expect(data.length).toEqual(record);
      done();
    });

  });
  
  it('should call updateProduct() with data', (done) => {
    
    //Arrange
    let record: number = 3;

    // Act
    component.RemoveProduct(2).then((data) => {

      // Assert
      expect(data.length).toEqual(record);
      done();
    });

  });
});
