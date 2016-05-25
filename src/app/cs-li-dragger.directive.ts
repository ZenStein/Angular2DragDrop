import { Directive, ElementRef } from '@angular/core';

@Directive({
selector: '[csDragger]',
host:{
'(dragstart)':'onDragStart($event)',
'(dragend)':'onDragEnd($event)',
'(dragover)':'onDragOver($event)',
'(dragleave)':'onDragLeave($event)',
'(drop)':'onDrop($event)',
'(click)':'onClick($event)'//,
//'(hasclass)':'hasClass()'
}
})


export class CsLiDragger {
//removeCLass
//addClass
//
    constructor(private el: ElementRef) {
        this.el = el;
        this.el.nativeElement.draggable = true;
    }
    onDragLeave(ev){
        this.removeCLass('dragged-over') 
        this.addClass('original')
    }
    onClick( ev){
        console.log('this clicked directive start')
        console.log(this)
        console.log(ev)
        console.log('ev from click Directive end')
    }
    onDrop(ev){
        this.removeCLass('is-selected')
        this.removeCLass('dragged-over')

        this.addClass('original')
    }
    onDragEnd(ev){
        ev.preventDefault()
        
        if(this.hasClass('is-selected')){
           this.removeCLass('is-selected')
        }
        this.addClass('original')
    }
    onDragOver(ev){
        ev.preventDefault()
        if(this.hasClass('draggged-over')){
            return false
        }
        this.addClass('dragged-over')
        //this.el.nativeElement.className = 'dragged-over'
    }
    onDragStart(ev){
        ev.dataTransfer.effectAllowed = 'move'
    }
     hasClass(cssClass: string){
        let reg = new RegExp(cssClass, "g")
        return this.el.nativeElement.className.match(cssClass) 
    }
    addClass(cssClass: string){
        this.el.nativeElement.className += " "+cssClass+" ";     
    }
    removeCLass(cssClass: string){
       let  reg = new RegExp(cssClass,"g");
       this.el.nativeElement.className.replace(reg, '') 
    }

}
