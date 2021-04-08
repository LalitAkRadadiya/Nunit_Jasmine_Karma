import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentComponent } from './student.component';
import { SharedService } from '../SharedService/shared.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('StudentComponent', () => {
  let component: StudentComponent;
  let service: SharedService;

  let fixture: ComponentFixture<StudentComponent>;

  beforeEach(async () => {
    TestBed.configureTestingModule({ imports: [HttpClientTestingModule] });
    service = TestBed.inject(SharedService);
    component = new StudentComponent(service);
  });

  afterEach(() => {
    service = null;
    component = null;
  });

  it('should call GetAllDatas()', (done) => {

    
    component.GetAllDatas().then((data) => {

      expect(data).toBeTruthy();
      done();
    });
  });

  it('should call GetDataById()', (done) => {

    
    
    component.GetDataById(3).then((data) => {

      expect(data).toBeTruthy();
      done();
    });
  });

  it('should call addData()', (done) => {

    
    component.addData({id:3,userId:1,title:"ram",body:"raja"}).then((data) => {

      expect(data).toBeTruthy();
      done();
    });
  });

  it('should call editData()', (done) => {

    
    component.editData({id:3,userId:1,title:"ram",body:"raja"}).then((data) => {

      expect(data).toBeTruthy();
      done();
    });
  });

  it('should call removeData()', (done) => {

    
    component.removeData(5).then((data) => {

      expect(data).toBeTruthy();
      done();
    });
  });
});
