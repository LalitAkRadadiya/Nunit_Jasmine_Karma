import { Component } from '@angular/core';
import { StudentService } from './SharedService/Student.service';
import { Student } from './SharedService/StudentModel'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Assigment6';
  constructor(private service:StudentService){}

  async GetAllStudents():Promise<Student[]>{
    return await this.service.getStudents();
  }
  async GetStudentbyId(id:number):Promise<Student>{
    return await this.service.getStudent(id);
  }
  async AddStudent(model:Student):Promise<Student[]>{
    return await this.service.createStudent({id:5,department:"IT",studentName:"Lalit",rollNo:1});
  }
  async EditStudent(model:Student):Promise<Student[]>{
    return await this.service.updateStudent({id:3,department:"CP",studentName:"Shayam",rollNo:2})
  }
  async DeleteStudent(id:number):Promise<Student[]>{
    return await this.service.deleteStudent(id);
  }
}
