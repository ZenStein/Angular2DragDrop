import { Directive, Output, EventEmitter } from '@angular/core';

@Directive({
  selector: 'list-item',
    host:{
  '(dragover)':'onDragover($event)',
  '(dragenter)':'onDragEnter($event)',
  '(dragend)':'onDragEnd($event)',
  '(dragleave)':'onDragLeave($event)',
  '(dragstart)':'onDragStart($event)',
  '(drop)':'onDrop($event)'
    }
})
export class ListItem {
    onDragover(){}
    onDragEnter(){}
    onDragEnd(){}
    onDragLeave(){}
    onDrop(){}
    xTest = '0_A_YA_2'
@Output() listItemLocation = new EventEmitter()
  constructor() {
    //setInterval(()=>this.listItemLocation.emit(this.xTest), 10000)
  }
  onDragStart(ev){
      console.log('HEREHEREHEREHERE')
    console.log(ev)
this.listItemLocation.emit('event')
  }

}
