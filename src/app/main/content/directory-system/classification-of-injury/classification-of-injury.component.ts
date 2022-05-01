import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


// #region class & interface of directory system, this for some function of it
export interface Classification{
  label:string[];
  data:string[];
}
export class templates implements Classification{
  label: string[] = [];
  data: string[] = [];
  constructor(label:string[],data:string[]){
    this.label=label;
    this.data=data;

  };
  getLabel():string[]{
    return this.label;
  }
  getData():string[]{
    return this.data;
  }

  setLabel(label:string[]){
    this.label=label;
  }
  setData(data:string[]){
    this.data=data;
  }
  toString():string{
    let str:any;
    this.label.forEach(function (value) {
        str=str+value;
    });
    this.data.forEach(function (value) {
      str=str+value;
    });

    return str;
  }
}

//#region
@Component({
  selector: 'app-classification-of-injury',
  templateUrl: './classification-of-injury.component.html',
  styleUrls: ['./classification-of-injury.component.scss']
})
export class ClassificationOfInjuryComponent implements OnInit {

    idTpls:number=0;
    defaultTpl= new templates([],[]);

  //#region label của các danh mục
  labels:string[][]=[
      ["Mã hình thức","Tên hình thức",""],
      ["Mã mức độ","Tên mức độ","Hình thức báo cáo"],
      ["Mã sự cố chi tiết","Tên sự cố chi tiết","Nhóm mức độ tổn thương"],
      ["Mã loại sự cố nghiêm trọng","Tên loại sự cố nghiêm trọng","Nhóm mức độ tổn thương"],
      ["Mã sự cố y khoa chi tiết","Tên sự cố y khoa chi tiết","Loại sự cố y khoa nghiêm trọng"],
      ["Mã mức độ","Tên mức độ",""],
      ["Mã mức độ","Tên mức độ",""],
      ["Mã nội dung sự cố","Tên nội dung sự cố","Nhóm sự cố"],
      ["Mã nguyên nhân","Tên nguyên nhân","Tên hình thức"],
      ["Mã nội dung nguyên nhân","Tên nội dung nguyên nhân","Nhóm nguyên nhân"]
    ]


  constructor(private acti:ActivatedRoute) {}
  ngAfterContentInit(): void {
    this.acti.params.subscribe(e=> {
      this.idTpls=e['id'];
      switch(this.idTpls+""){
        case "1":{
          this.defaultTpl.setLabel(this.labels[0]);
          break;
        }
        case "2":{
          this.defaultTpl.setLabel(this.labels[1]);
          break;
        }
        case "3":{
          this.defaultTpl.setLabel(this.labels[2]);
          break;
        }
        case "4":{
          this.defaultTpl.setLabel(this.labels[3]);
          break;
        }
        case "5":{
          this.defaultTpl.setLabel(this.labels[4]);
          break;
        }
        case "6":{
          this.defaultTpl.setLabel(this.labels[5]);
          break;
        }
        case "7":{
          this.defaultTpl.setLabel(this.labels[6]);
          break;
        }
        case "8":{
          this.defaultTpl.setLabel(this.labels[7]);
          break;
        }
        case "9":{
          this.defaultTpl.setLabel(this.labels[8]);
          break;
        }
        case "10":{
          this.defaultTpl.setLabel(this.labels[9]);
          break;
        }
        default:{
          this.defaultTpl.setLabel(this.labels[1]);
          break;
        }
      }
    });

  }
  ngOnInit() {
    console.log("init");



  }

  //#region data of table
  dataTable =  Array(5).fill("");

}


