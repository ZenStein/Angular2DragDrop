import { Component, ViewChild, AfterViewInit } from '@angular/core';
import {NgClass} from '@angular/common';
import { CsLiDragger } from './cs-li-dragger.directive'
import {DragDropModelTemplate} from './drag-drop-model-template';
import { ListModelService } from './list-model.service';
import { CsSelected } from './cs-selected.directive';
import {ListDropper} from './list-dropper.directive';
import {ListControlsComponent} from './list-controls/list-controls.component';

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
  selector: 'robo-ren-g2-app',
  directives: [[CsLiDragger], [CsSelected],[ListDropper], [NgClass], [ListControlsComponent]],
  templateUrl: 'robo-ren-g2.component.html',
  styleUrls: ['robo-ren-g2.component.css']
})
export class RoboRenG2AppComponent/* implements AfterViewInit */{

//@ViewChild(CsSelected)
//private csselected: CsSelected
//ngAfterViewInit(){
 //   console.log(this.csselected)
//}
 canDropToList = false 
selectionsMap =  new Map()
  modelService = new ListModelService()
  data = [ ['header1','AAA','BBB','fff','hhh'],
           ['List 2','CCC','DDD'],
           ['header3','XXX','ZZZ'] 
         ]
    templateBuilder = new DragDropModelTemplate(this.data)
    listsData = this.modelService.model = this.templateBuilder.conformModel() 
    title = 'robo-ren-g2 works!'
    isValidDrop = false
    dragDidStartOn  
    isbeingDrugOver = false
    didDropOn
    theDragged
    isSelected
 //   listItemLocation(...params){
 //       console.log('location result below  ')
 //       console.log(params)
 //   }
    onDragStart(ev){
      this.modelService.doSet(ev.target.id,'selected',true)
      this.theDragged = ev.target.id
      this.modelService.mapSelectedInModel()
  }
  onDragEnter(ev){/**/ }
  onDragOver(ev){ /**/ }
  onDragLeave(ev){ /*     ev.dataTransfer.effectAllowed = 'move' //    ev.dataTransfer.dropEffect = 'move'*/ }
  onDrop(ev){
    ev.preventDefault()
     if(this.isValidDrop){
      this.modelService.doDropData(ev.target.id)
      this.modelService.resetAllSelectionsToFalse()
     }
     else{
         console.log('list drop else')
         console.log('list drop else')
     }
     this.modelService.doSet(this.theDragged, 'selected', false)
      this.modelService.flushSelectedLineup()
      this.listsData = this.modelService.getModel() 
  }

  onDragEnd(ev){
      ev.preventDefault()
      if(this.isValidDrop){
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
       this.modelService.doSet(data.id, 'selected', data.selectionMade)
   console.log(data)
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
    this.isValidDrop = validation
}
setCanDropToList(ev){
    this.canDropToList = ev.canDropToList
}
}
