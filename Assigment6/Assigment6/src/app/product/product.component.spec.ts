import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductComponent } from './product.component';

import {HttpClientTestingModule} from '@angular/common/http/testing';
import { SharedService } from '../SharedService/shared.service';

describe('ProductComponent', () => {
  let component: ProductComponent;
  let service: SharedService;

  let fixture: ComponentFixture<ProductComponent>;

  beforeEach(async () => {
    TestBed.configureTestingModule({ imports: [HttpClientTestingModule] });
    service = TestBed.inject(SharedService);
    component = new ProductComponent(service);
  });

  afterEach(() => {
    service = null;
    component = null;
  });

  it('should call GetAllPosts()', (done) => {

    // Act
    component.GetAllPosts().then((data) => {

      // Assert
      expect(data).toBeTruthy();
      console.log("hello",data);
      done();
    });
  });

  it('should call GetSinglePost()', (done) => {

    
    // Act
    component.GetSinglePost(3).then((data) => {

      // Assert
      expect(data).toBeTruthy();
      done();
    });
  });

  it('should call addPost()', (done) => {

    // Act
    component.addPost({id:3,userId:1,title:"ram",body:"raja"}).then((data) => {

      // Assert
      expect(data).toBeTruthy();
      done();
    });
  });

  it('should call updatePost()', (done) => {

    // Act
    component.updatePost({id:3,userId:1,title:"ram",body:"raja"}).then((data) => {

      // Assert
      expect(data).toBeTruthy();
      done();
    });
  });

  it('should call deletePost()', (done) => {

    // Act
    component.deletePost(5).then((data) => {

      // Assert
      expect(data).toBeTruthy();
      done();
    });
  });
});
