import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
selector: '[csDragger]',
host:{
'(dragstart)':'onDragStart($event)',
'(dragend)':'onDragEnd($event)',
'(dragover)':'onDragOver($event)',
'(dragleave)':'onDragLeave($event)',
'(drop)':'onDrop($event)',
'(click)':'onClick($event)'

}
})
export class CsLiDragger {

    constructor(private el: ElementRef) {
        this.el = el
        this.el.nativeElement.draggable = true;
    }
    onDragLeave(ev){
        this.el.nativeElement.className = 'original'
    }
    onClick(ev){

    console.log('this clicked directive start')
    console.log(this)
    console.log(ev)
    console.log('ev from click Directive end')
   // let elem = this.el.nativeElement.className
    //  if(/is-selected/.test(elem)){
    //      this.el.nativeElement.className = elem.replace(/is-selected/g, '') 
//  data = [ ['header1','AAA','BBB'],
//           ['List 2','CCC','DDD'],
//           ['header3','XXX','ZZZ'] 
//         ]
//  data = [ ['header1','AAA','BBB'],
//           ['List 2','CCC','DDD'],
//           ['header3','XXX','ZZZ'] 
//         ]
//  data = [ ['header1','AAA','BBB'],
//           ['List 2','CCC','DDD'],
//           ['header3','XXX','ZZZ'] 
//         ]
    //  }
    //  else{
//          console.log('selected this')
//          console.log(this)
//console.log('click event')
//console.log(ev)


      //    this.el.nativeElement.className = ' is-selected'
      //  }
    }
    onDrop(ev){
        this.el.nativeElement.className = 'original '
    }
    onDragEnd(){
        this.el.nativeElement.className = 'original '
    }
    onDragOver(ev){
        ev.preventDefault()
        this.el.nativeElement.className = 'dragged-over'
    }
    onDragStart(ev){
        ev.dataTransfer.effectAllowed = 'move'
    }


}
