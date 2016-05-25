import { Directive, Output, Input, EventEmitter } from '@angular/core';

@Directive({
  selector: 'list-item',
    host:{
  '(dragover)':'onDragover($event)',
  '(click)':'myClick($event)'
//  '(dragenter)':'onDragEnter($event)',
//  '(dragend)':'onDragEnd($event)',
//  '(dragleave)':'onDragLeave($event)',
//  '(dragstart)':'onDragStart($event)',
//  '(drop)':'onDrop($event)'
    }
})
export class ListItem {
    onDragover(ev){
        console.log('directive ev')
        console.log(ev)
    }

    myClick(ev){
        alert('clickedddddd')
    }
  //  onDragEnter(ev){
   //     console.log('directive ev')
   //     console.log(ev)
  //  }
  //  onDragEnd(ev){
  //      console.log('directive ev')
 //       console.log(ev)
 //   }
 //   onDragLeave(ev){
 //       console.log('directive ev')
 //       console.log(ev)
 //   }
  //  xTest = '0_A_YA_2'
@Output() listItemLocation = new EventEmitter()
  constructor() {
    this.listItemLocation.emit('event')
    //setInterval(()=>this.listItemLocation.emit(this.xTest), 10000)
  }
//  onDrop(ev){
//      alert('drop firede')
//  console.log('ev from list item ')
//  console.log(ev)
//  }
//  onDragStart(ev){
//      console.log('HEREHEREHEREHERE')
//    console.log(ev)
    
//return false
//  }

}
