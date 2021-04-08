import { Injectable } from '@angular/core';
import { Student } from './studentModel'
@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor() { }
  
  public students:Student[] = [
    {id: 1, studentName: 'a',department:'IT',rollNo:1},
    {id: 2, studentName: 'b',department:'CP',rollNo:2},
    {id: 3, studentName: 'c',department:'CE',rollNo:3},
    {id: 4, studentName: 'd',department:'ME',rollNo:4},
  ];
  async getStudents():Promise<Student[]>{
    return this.students;
  }
  async getStudent(id:number){
    return this.students.find(x=>x.id==id);
  }
  async createStudent(model:Student){
    this.students.push(model);
    return this.students;
  }
  async updateStudent(model:Student){
    this.students.find(x=>x.id==model.id).id=model.id;
    this.students.find(x=>x.id==model.id).studentName=model.studentName;
    this.students.find(x=>x.id==model.id).department=model.department;
    this.students.find(x=>x.id==model.id).rollNo=model.rollNo;
    return this.students;
  }
  async deleteStudent(id:number){
    this.students.splice(id, 1);
    return this.students;
  }
}
