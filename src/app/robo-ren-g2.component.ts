import { Component } from '@angular/core';
import { ListItem } from './list-item.directive'        
import { CsLiDragger } from './cs-li-dragger.directive'
import {DragDropModelTemplate} from './drag-drop-model-template';
import { ListModelService } from './list-model.service';

@Component({
    host:{
  '(dragstart)' : 'onDragStart($event)',
  '(dragenter)' : 'onDragEnter($event)',
  // '(dragover)' : 'onDragOver($event)',
  '(dragleave)' : 'onDragLeave($event)',
       '(drop)' : 'onDrop($event)',
    '(dragend)' : 'onDragEnd($event)',
      '(click)' : 'onClick($event)'    
    },
  moduleId: module.id,
  selector: 'robo-ren-g2-app',
  directives: [[CsLiDragger],[ListItem]],
  templateUrl: 'robo-ren-g2.component.html',
  styleUrls: ['robo-ren-g2.component.css']
})
export class RoboRenG2AppComponent {


  selectionsMap =  new Map()
  modelService = new ListModelService()
    //console.log(this.x)
  data = [ ['header1','AAA','BBB'],
           ['List 2','CCC','DDD'],
           ['header3','XXX','ZZZ'] 
         ]
    templateBuilder = new DragDropModelTemplate(this.data)
    //this.modelService.model = this.templateBuilder.conformModel()
    listsData = this.modelService.model = this.templateBuilder.conformModel() 
    title = 'robo-ren-g2 works!'
    isValidDrop = false
    dragDidStartOn  
    isbeingDrugOver = false
    didDropOn
    isSelected
    listItemLocation(...params){
        console.log('location result below  ')
        console.log(params)
    }
    onDragStart(ev){
      ev.dataTransfer.dropEffect = 'move'
      ev.dataTransfer.effectAllowed = 'move'
        console.log('ev')
        console.log(ev)
      this.modelService.doSet(ev.target.id,'selected',true)
      let transferData = this.modelService.mapSelectedInModel()
      ev.dataTransfer.setData('dragDidStartOn',transferData)
  }
  onDragEnter(ev){
        console.log('dragenter')
      this.isValidDrop=true 
      ev.dataTransfer.effectAllowed = 'move'
      ev.dataTransfer.dropEffect = 'move'
      }
  //onDragOver(ev){
  //      ev.preventDefault()
  //    this.isValidDrop=true 
  //    ev.dataTransfer.effectAllowed = 'move'
  //    ev.dataTransfer.dropEffect = 'move'
  //    return false
   //   }
  onDragLeave(ev){
      this.isValidDrop = false
      ev.dataTransfer.effectAllowed = 'move'
      ev.dataTransfer.dropEffect = 'move'
      }
  onDrop(ev){
    ev.preventDefault()
    console.log('ev on drop')
    console.log(ev)
////    let effect = ev.dataTransfer.dropEffect
//    let effectAllowed = ev.dataTransfer.effectAllowed
//    console.log('this.isValidDrop') //console.log(this.isValidDrop)
//     if(this.isValidDrop){
//        //let startedId =  this.dragDidStartOn
//        //let fromList = this.whichList(startedId)
//         //let fromItem = this.whichIndex(startedId)
//        //console.log('you were dragging list' + fromList)
//        //console.log('youwere dragging index' + fromItem)
//        //this.listsData[fromList].listItems[fromItem].selected = true
//        let id = ev.target.id
//        let list = this.whichList(id) 
//        let index = this.whichIndex(id)
//
       console.log('ev target id on drop') 
       console.log(ev) 
      ev.dataTransfer.getData('dragDidStartOn')
      this.listsData = this.modelService.doDropData(ev.target.id)
      this.modelService.resetAllSelectionsToFalse()
//     } 
          ev.dataTransfer.clearData()
    /*this.didDropOn = ev.target.id*/
    /*console.log(this.didDropOn) */
  }

  onDragEnd(ev){
      ev.preventDefault()
    console.log('dragend')
      console.log(ev)
      this.modelService.resetAllSelectionsToFalse()
      this.isbeingDrugOver = false
      this.isSelected = false
      this.isValidDrop = false
      ev.dataTransfer.clearData()
      return false
   }
  onClick(ev){
console.log(ev)
  console.log(this.listsData)
    console.log('this clicked component start')
//    console.log(this)
//    console.log(ev)
//    console.log('ev from click component end')
//
        let id = (ev.target.id)
        let list = this.whichList(id) 
        let index = this.whichIndex(id)
    console.log('herherheherh')


    console.log(list)
    console.log(index)

    console.log('herherheherh')
    let  isSelected = this.listsData[list].listItems[index][ 'selected' ]
    
    if(isSelected){
      isSelected = false 
    }
    else{
      isSelected = true
    }
    
    this.modelService.doSet(ev.target.id, 'selected', isSelected)
    this.listsData[list].listItems[index].selected = isSelected
 //   else{
 //       
 //     }
 //   if(this.selectionsMap.has(id)){
 //      this.selectionsMap.delete(id)
 //   }
 //   else{
 //       this.selectionsMap.set(id,id)
 //   }
//    //  let test =  this.selectionsMap.keys()
//     //  console.log(test.next())
//     //  console.log(test.next().value())
//     //  console.log(test.next())
       // console.log(this.selectionsMap.entries())
       // for(let  mapping in this.selectionsMap.keys()){
       // console.log('mapping') 
       // console.log(mapping)
//       //     }

  }
  whichList(listUid){
     let x = listUid.replace(/_[\d]*/g, '')
     console.log('xxx whichlist')
     console.log(x)
     return x
     //return this.listsData[x].listItems      
  }
   whichIndex(listUid){
    console.log('which index below first arg then result')
    let x = listUid.replace(/[\d]*_/g, '')
    console.log(listUid)
    console.log(x)
    console.log('which index below first arg then result bottom')

    return x
  }
  getSelected(remove: boolean){
    let selectedGroup = []
    for(let i=0;i<this.listsData.length;i++){
      for(let j=0;j<this.listsData[i].listItems.length;j++){
        if(this.listsData[i].listItems[j].selected){
          console.log('found selected at list'+i+'index'+j)
          console.log('slicing frm list'+i+'row'+j)
          if(remove){
          selectedGroup.push((this.listsData[i].listItems).splice(j,1)[0])
          //this.listsData[onDropd].listItems.push(removed)
          }
          else{
          let clone = Object.assign({}, this.listsData[i].listItems[j])
          selectedGroup.push(clone)
          }
        }
      }
    }
    return selectedGroup
  }


}
