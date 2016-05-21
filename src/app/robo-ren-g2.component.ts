import { Component, Input } from '@angular/core';
        
import { CsLiDragger } from './cs-li-dragger.directive'
import {DragDropModelTemplate} from './drag-drop-model-template';
import { ListModelService } from './list-model.service';

@Component({
    host:{
  '(dragover)':'onDragover($event)',
  '(dragenter)':'onDragEnter($event)',
  '(dragend)':'onDragEnd($event)',
  '(dragleave)':'onDragLeave($event)',
  '(dragstart)':'onDragStart($event)',
  '(drop)':'onDrop($event)',
  '(click)':'onClick($event)'    
    },
  moduleId: module.id,
  selector: 'robo-ren-g2-app',
  directives: [CsLiDragger],
  templateUrl: 'robo-ren-g2.component.html',
  styleUrls: ['robo-ren-g2.component.css']
})
export class RoboRenG2AppComponent {


//@Input set somefunc(){ }

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
  didDropOn

  onDragStart(ev){
  this.modelService.doSet(ev.target.id,'selected',true)
  let transferData = this.modelService.selectedItems()
      this.dragDidStartOn = ''
      ev.dataTransfer.dropEffect = 'move'
      ev.dataTransfer.effectAllowed = 'move'
      this.dragDidStartOn = ev.target.id
      ev.dataTransfer.setData('dragDidStartOn',transferData)
  }
  onDragEnter(ev){
        console.log('dragenter')
      this.isValidDrop=true 
      ev.dataTransfer.effectAllowed = 'move'
      ev.dataTransfer.dropEffect = 'move'
      }
  onDragover(ev){
      this.isValidDrop=true 
      ev.dataTransfer.effectAllowed = 'move'
      ev.dataTransfer.dropEffect = 'move'
      }
  onDragLeave(ev){
      this.isValidDrop = false
      ev.dataTransfer.effectAllowed = 'move'
      ev.dataTransfer.dropEffect = 'move'
      }
  onDrop(ev){
    console.log('ev on drop')
    console.log(ev)
 //   let effect = ev.dataTransfer.dropEffect
  //  let effectAllowed = ev.dataTransfer.effectAllowed
    //console.log('this.isValidDrop') //console.log(this.isValidDrop)
     if(this.isValidDrop){
       let startedId =  this.dragDidStartOn
       let fromList = this.whichList(startedId)
       let fromItem = this.whichIndex(startedId)
     //  console.log('you were dragging list' + fromList)
     //  console.log('youwere dragging index' + fromItem)
      // this.listsData[fromList].listItems[fromItem].selected = true
        let id = ev.target.id
        let list = this.whichList(id) 
        let index = this.whichIndex(id)

        
      ev.dataTransfer.getData('dragDidStartOn')
      this.listsData = this.modelService.injectDrop(ev.target.id)
      this.modelService.resetAllSelectionsToFalse()
    //  ev.dataTransfer.getData('selectedFiles')
      // let another =  this.getSelected(true)
//            //console.log('drop ev') //console.log(ev)
       //  let uid = ev.target.id
//            // console.log('uid')
//            console.log('(this.dwragDidStartOn)')
  //     this.listsData[list].listItems.push(another[0]) 
//            console.log(this.dragDidStartOn)
       //  let itemMoving = this.listsData[fromList].listItems).splice(fromItem, 1))[0] 
         //let itemMoving = (this.whichList(this.dragDidStartOn).splice(this.whichIndex(this.dragDidStartOn), 1))[0] 
//            console.log('itewmMoving')
//            console.log(itemMoving)
       //  this.listsData[list].listItems).splice(index, 0, itemMoving )
         //let replaceMoved = this.whichList(uid).splice(this.whichIndex(uid),0, itemMoving )
      }
      else{
          ev.dataTransfer.clearData()
          }
          
          ev.dataTransfer.clearData()
    this.didDropOn = ev.target.id
    console.log(this.didDropOn) 
  }

  onDragEnd(ev){
    console.log('dragend')
    this.selectionsMap.clear()
    //console.log(ev)
   }
  onClick(ev){

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

    let  isSelected = this.listsData[list].listItems[index].selected
    
    if(isSelected){
      isSelected = false 
    }
    else{
      isSelected = true
    }
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
    let dummySet = this.selectionsMap.set('delete','me')
    let x = Array.from(this.selectionsMap.keys())
    console.log('map after click.')
    console.log(x)

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

