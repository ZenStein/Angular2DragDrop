import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
selector: '[csDragger]',
host:{
'(dragstart)':'onDragStart($event)',
'(dragend)':'onDragEnd($event)',
'(dragover)':'onDragOver($event)',
'(dragleave)':'onDragLeave($event)',
'(dragenter)':'onDragEnter($event)',
'(drop)':'onDrop($event)',
'(click)':'onClick($event)'

}
})
export class CsLiDragger {

isbeingDrugOver = false

    constructor(private el: ElementRef) {
        this.el = el
        this.el.nativeElement.draggable = true;
    }
    onDragStart(ev){
        ev.dataTransfer.effectAllowed = 'move'
    }
    onDrop(ev){
        this.isbeingDrugOver = false
    }
    onDragEnd(){
        this.isbeingDrugOver = false
        this.el.nativeElement.className = 'original '
    }
    onDragEnter(){

    }
    onDragOver(ev){
        ev.preventDefault()
        this.isbeingDrugOver = true
        this.el.nativeElement.className = 'dragged-over'
    }
    onDragLeave(ev){
        this.isbeingDrugOver = false
        this.el.nativeElement.className = 'original'
    }
    onClick(ev){

    }


}
