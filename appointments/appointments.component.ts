import { Component, OnInit,ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {TranslateService} from '@ngx-translate/core';
import {MatOption} from '@angular/material';
import { ILevelData, IDepartment, IService } from './model/appointmentModel';
import {  DataService } from '../../data.service';

@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.scss']
})
export class AppointmentsComponent implements OnInit {
  levellist:ILevelData[]=[];
  floorgroup:ILevelData[]=[];
  departmentlist:IDepartment[]=[];
  deptGroup:IDepartment[]=[];
  serviceList:IService[]=[];
  level:any;
  levelList:any;
  appointments:FormGroup;
  @ViewChild('allfloorselected') private allfloorselected: MatOption;
  @ViewChild('alldepartmentsSelected') private alldepartmentsSelected:MatOption;
  @ViewChild('allserviceSelected') private allserviceSelected:MatOption;
  masterSelected: any;
  constructor(private fg:FormBuilder,private translate:TranslateService,private service:DataService) {
    this.appointments=this.fg.group({
      floor:[null,[Validators.required]],
      department:[null,[Validators.required]],
      service:[null,[Validators.required]]
    })
   }

  ngOnInit() {
    this.getallData();

  }
  getallData(){
    this.service.getData1().subscribe( (result:ILevelData[]) => {
      this.levellist=result['floors'];
      console.log("levellist=>",this.levellist)

    })

  }
  getCheckedItemList(){
    this.levellist = [];
    for (var i = 0; i < this.levellist.length; i++) {
      if(this.levellist[i].selected)
      this.levellist.push(this.levellist[i]);
    }
    this.levelList = JSON.stringify(this.levelList);
  }
  toggleAllSelection(event){
    const checked = event.target.checked;
    this.levellist.forEach(item => item.selected = checked);
    
    //  this.getCheckedItemList();
  }
  // toggleperOne(){

  // }
 


  // toggleAllSelection(type){
  //   if(type=='floor'){
  //     // for(var i=0;i<=this.levellist.length;i++)
  //     // this.levellist[i].selected=this.level
  //     if (this.allfloorselected.selected){console.log("floors1=>",this.allfloorselected.selected)
  //       this.appointments.controls.floor.patchValue([...this.levellist.map(item=>item.floorId),0])
  //     }
  //     else{
  //       this.appointments.controls.floor.patchValue([]);
  //       this.floorgroup=[];console.log("floorgroup",this.floorgroup)
  //     }
  //   }
  //   else if(type=='department'){
  //     this.departmentlist=[];
  //     if(this.alldepartmentsSelected.selected){
  //       this.floorgroup.map(item=>{
  //         let deptmt=item.departments;
  //         this.departmentlist=this.departmentlist.concat(deptmt)
  //       });
  //       this.appointments.controls.department.patchValue([...this.departmentlist.map(dept=>dept),0])
  //       this.deptGroup=this.appointments.value.department;
  //     }
  //     else{
  //       this.appointments.controls.department.patchValue([]);
  //       this.deptGroup=[];
  //     }
  //   }
  //   else if(type=='service'){
  //     this.serviceList=[];
  //     if(this.allserviceSelected.selected){
  //       this.deptGroup.map(item=>{
  //         if(item.services!=undefined){
  //           let srvc=item.services;
  //           this.serviceList=this.serviceList.concat(srvc)
  //         }
  //       })
  //       this.appointments.controls.service.patchValue([...this.serviceList.map(src=>src),0])
  //     }
  //     else{
  //       this.appointments.controls.service.patchValue([]);
  //     }
  //   }

  // }
  // toggleperOne(type){
  //   if(type=='floor'){
  //     if(this.allfloorselected.selected){
  //       this.allfloorselected.deselect();
  //       return false;
  //     }
  //     if(this.appointments.controls.floor.value.length==this.levellist.length){
  //       this.allfloorselected.select()
  //     }
  //   }
  //   else if(type=='department'){
  //     if(this.alldepartmentsSelected.selected){
  //       this.alldepartmentsSelected.deselect();
  //       return false;
  //     }
  //    let count=0;
  //    this.floorgroup.forEach(x=>{
  //      count+=x.departments.length
  //    })
  //    if(this.appointments.controls.department.value.length==count){
  //      this.alldepartmentsSelected.select();
  //    }
  //   }
  //   else if(type=='service'){
  //     if(this.allserviceSelected.selected){
  //       this.allserviceSelected.deselect();
  //       return false;
  //     }
  //     let count=0;
  //     this.deptGroup.forEach(x=>{
  //       count+=x.services.length
  //     })
  //     if(this.appointments.controls.service.value.length==count){
  //       this.allserviceSelected.select();
  //     }
  //   }

  // }
  loadDepartments(_floors){
    if(this.allfloorselected.selected){
    _floors=this.getFields(this.levellist,"floorId")
    }
    this.floorgroup= this.levellist.filter(x =>_floors.findIndex(y => y == x.floorId) != -1);console.log("group",this.floorgroup)
  }
  
  loadServices(_department){
   if(_department.length>0){
     this.deptGroup=_department;
     console.log("deptGroup",this.deptGroup)
   }
   else{
     this.deptGroup=[];
   }
  }
  
  getFields(input, field) {
    var output = [];
    for (var i=0; i < input.length ; ++i)
        output.push(input[i][field]);console.log("output",output)
    return output;
  }
}

