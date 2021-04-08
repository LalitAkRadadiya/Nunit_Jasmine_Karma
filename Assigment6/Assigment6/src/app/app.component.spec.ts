import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { StudentService } from './SharedService/student.service';

describe('AppComponent', () => {

  let appComponent: AppComponent;
  let service: StudentService;

  beforeEach(() => {
    service = new StudentService();
    appComponent = new AppComponent(service);
  });
  afterEach(() => {
    service = null;
    appComponent = null;
  });

  it('should call GetAllStudents()', (done) => {

    //Arrange
    let record: number = 4;

    // Act
    appComponent.GetAllStudents().then((data) => {

      // Assert
      expect(data.length).toEqual(record);
      done();
    });
  });

  it('should call GetStudentById(2)', (done) => {

    // Act
    appComponent.GetStudentbyId(2).then((data) => {

      // Assert
      expect(data).toBeTruthy();
      done();
    });

  });

  it('should call AddStudent() with data', (done) => {
    
    //Arrange
    let record: number = 5;

    // Act
    appComponent.AddStudent({id:20,department:"IT",rollNo:2,studentName:"Lalit"}).then((data) => {

      // Assert
      expect(data.length).toEqual(record);
      done();
    });

  });

  it('should call EditStudent() with data', (done) => {
    
    //Arrange
    let record: number = 4;

    // Act
    appComponent.EditStudent({id:2,department:"CIVIL",rollNo:4,studentName:"Lakhan"}).then((data) => {

      // Assert
      expect(data.length).toEqual(record);
      done();
    });

  });
  
  it('should call DeleteStudent() with data', (done) => {
    
    //Arrange
    let record: number = 3;

    // Act
    appComponent.DeleteStudent(2).then((data) => {

      // Assert
      expect(data.length).toEqual(record);
      done();
    });

  });
});
