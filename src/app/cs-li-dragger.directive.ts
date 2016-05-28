import { Directive, ElementRef, Output, EventEmitter } from '@angular/core';

@Directive({
selector: '[csDragger]',
host:{
    '(dragstart)':'onDragStart($event)',
    '(dragenter)':'onDragEnter($event)',
    '(dragleave)':'onDragLeave($event)',
     '(dragover)':'onDragOver($event)',
      '(dragend)':'onDragEnd($event)',
         '(drop)':'onDrop($event)',
         '(selectionToggle)':'setSelected($event)'
}
})


export class CsLiDragger {
private selected = false
    @Output() dropSpotValid   = new EventEmitter()
    @Output() selectionChange = new EventEmitter()
   
    constructor(private el: ElementRef) {
        this.el = el;
        el.nativeElement.draggable = true;
    }
    setSelected(ev){
        console.log('this on selection in dragger')
        console.log(this)
        this.selected = ev.selectionMade
        if(this.selected){
        this.includeClass('is-selected')
        }
        else{
        this.removeCLass('is-selected')
        }
        console.log('set SELECTED CALLLED')

    }
    onDragLeave(ev){
        console.log('drag leave')
        this.removeCLass('dragged-over') 
        this.dropSpotValid.emit(false)
    }
    onDrop(ev){
        this.removeCLass('dragged-over')
    }
    onDragEnd(ev){
        ev.preventDefault()
        this.dropSpotValid.emit(false)
        this.selected = false
        this.selectionChange.emit(false)
        this.removeCLass('dragged-over')
    }
    onDragEnter(ev){
        if(this.selected){
            this.dropSpotValid.emit(false)
        }
        else{
            this.includeClass('dragged-over')
            this.dropSpotValid.emit(true)
        }
    }
    onDragOver(ev){
        ev.preventDefault()
        if(this.selected){
            this.dropSpotValid.emit(false)
        }
        else{
            this.dropSpotValid.emit(true)
        }
    }
    onDragStart(ev){
        console.log(this)
        this.selected = true
        this.selectionChange.emit(true)
        ev.dataTransfer.effectAllowed = 'move'
    }
    classContains(cssClass: string){
        if(this.el.nativeElement.className.match(cssClass)){
          return true
        }
        else{
          return false
        }
    }
    includeClass(cssClass: string){
        this.el.nativeElement.className += ` ${cssClass}`;     
    }
    removeCLass(cssClass: string){
        let x = new RegExp(` ${cssClass}`,'g')
        this.el.nativeElement.className =  this.el.nativeElement.className.replace(x, '') 
    }
}
