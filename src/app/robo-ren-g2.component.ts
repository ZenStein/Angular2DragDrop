import { Component, ViewChild, OnInit } from '@angular/core';
import {NgClass} from '@angular/common';
import { CsLiDragger } from './cs-li-dragger.directive'
import { ListModelService } from './list-model.service';
import { CsSelected } from './cs-selected.directive';
import {ListDropper} from './list-dropper.directive';
import {ListControlsComponent} from './list-controls/list-controls.component';
import {ItemComponent} from './item/item.component';
//import { MD_CARD_DIRECTIVES } from '@angular2-material/card';
//import { MD_BUTTON_DIRECTIVES } from '@angular2-material/button';
import{CsMaterialListComponent} from './material-list/material-list.component'
import {MdToolbar} from '@angular2-material/toolbar';
import {MD_SIDENAV_DIRECTIVES} from '@angular2-material/sidenav';
import {MD_CARD_DIRECTIVES} from '@angular2-material/card';
import {MdInput} from '@angular2-material/input';
import {MdButton} from '@angular2-material/button/button';
import {MD_LIST_DIRECTIVES} from '@angular2-material/list/list';
import {MdIcon} from '@angular2-material/icon/icon';
//import {MdList} from '@angular2-material/list/list';



@Component({
    host:{
  '(dragstart)' : 'onDragStart($event)',
  '(dragenter)' : 'onDragEnter($event)',
  // '(dragover)' : 'onDragOver($event)',
  '(dragleave)' : 'onDragLeave($event)',
       '(drop)' : 'onDrop($event)',
    '(dragend)' : 'onDragEnd($event)'//,
//      '(click)' : 'onClick($event)'    
    },
  moduleId: module.id,
  providers: [ListModelService],
  selector: 'robo-ren-g2-app',
  directives: [[CsLiDragger], [CsSelected],[ListDropper], [NgClass], [ListControlsComponent],[ItemComponent],
         MD_SIDENAV_DIRECTIVES,
    MD_LIST_DIRECTIVES,
    [ MD_CARD_DIRECTIVES ],
    MdToolbar,
    MdButton,
    MdIcon,
    MdInput,
[CsMaterialListComponent],
  //   MdList, 
      /*,[MD_CARD_DIRECTIVES],[MD_BUTTON_DIRECTIVES]*/],
  templateUrl: 'robo-ren-g2.component.html',
  styleUrls: ['robo-ren-g2.component.css']
})
export class RoboRenG2AppComponent implements OnInit {

   title = 'robo-ren-g2 works!'
    isValidDrop = false
    canDropToList = false 
    theDragged
    modelService
    listsData
    selectionMarker
    
constructor(modelServ: ListModelService){
    this.modelService = modelServ
    //this.modelService.
    //this.listsData = modelServ.getModel()
}

    ngOnInit(){
   let that = this   
    this.modelService.getModelFromTemplate().subscribe(function(data){
    console.log('3 layer')
    console.log(data)
    that.listsData = data
    })
    }
//  data = [ ['header1','AAA','BBB','fff','hhh'],
//           ['List 2','CCC','DDD'],
//           ['header3','XXX','ZZZ'] 
//         ]
   // modelService = new ListModelService()
//    templateBuilder = new DragDropModelTemplate(this.data)
//    listsData = this.modelService.model = this.templateBuilder.conformModel() 

    onDragStart(ev){
      this.modelService.doSet(ev.target.id,'selected',true)
      this.theDragged = ev.target.id
      this.modelService.mapSelectedInModel()
    }
    onDragEnter(ev){/**/ }
    onDragOver(ev){ /**/ }
    onDragLeave(ev){ /*     ev.dataTransfer.effectAllowed = 'move' //    ev.dataTransfer.dropEffect = 'move'*/ }
    onDrop(ev){
       // alert('drop')
       // console.log('dropev')
       // console.log(ev)
    ev.preventDefault()
     if(this.isValidDrop || this.canDropToList){
      this.modelService.doDropData(ev.target.id, this.canDropToList)
      this.modelService.resetAllSelectionsToFalse()
     }
     this.modelService.doSet(this.theDragged, 'selected', false)
      this.modelService.flushSelectedLineup()
      this.listsData = this.modelService.getModel() 
  }

  onDragEnd(ev){
      ev.preventDefault()
      if(this.isValidDrop){
          console.log('dragend false')
        return false
      }
      else{
        this.modelService.doSet(this.theDragged, 'selected', false)
        this.modelService.flushSelectedLineup()
        this.listsData = this.modelService.getModel() 
      }
      return false
   }
   selectionMade(data){
       this.modelService.doSet(data.id, 'selected', data.selectionMade, data.shiftKey)
   }
  whichList(listUid){
     let x = listUid.replace(/_[\d]*/g, '')
     return x
  }
   whichIndex(listUid){
    let x = listUid.replace(/[\d]*_/g, '')
    return x
  }

setIsValidDrop(validation){
    console.log('isvaliddropfire')
    console.log(validation)
     this.canDropToList =false 
    this.isValidDrop = validation
}
setCanDropToList(ev){
    this.canDropToList = ev.canDropToList
}
addList(ev){
    this.listsData =  this.modelService.addListToModel()
    console.log('addlist hit')
}
refreshAllAssignments(ev){
    console.log('refreshall')
    console.log(ev)
this.listsData = this.modelService.refreshAllAssignments()
}
//sortstatus(){

//}
//sortunit(){}
//hidethird(){}
}
