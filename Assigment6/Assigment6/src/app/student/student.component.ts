import { Component, OnInit } from '@angular/core';
import { SharedService } from '../SharedService/shared.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {

  constructor(private service: SharedService) { }

  ngOnInit(): void {
  }
  async GetAllDatas(){
    return (await this.service.getDatas()).subscribe(val => console.log('All studntList',val));
  }
  async GetDataById(id:number){
    return (await this.service.getData(id)).subscribe(val => console.log('student by Id',val));
  }
  async addData(model){
    return await this.service.addData();
  }
  async editData(model){
    return await this.service.updateData();
  }
  async removeData(id:number){
    return (await this.service.deleteData(id)).subscribe(val => console.log('remove student',val));
  }

}
