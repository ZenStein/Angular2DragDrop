import { Directive, Output,  ElementRef, Input, EventEmitter} from '@angular/core';


@Directive({
  selector: '[csSelected]',
  host :{
  '(click)':'toggle($event)',
  '(selectionChange)':'setSelectionTo($event)'
  },
})
export class CsSelected {
    @Output() selectionToggle = new EventEmitter()
private el: HTMLElement
private selected: boolean
private id: string
  constructor(el: ElementRef) {
        this.el = el.nativeElement
        this.id = this.el.id
  }
setSelectionTo(ev){
    console.log('set select in SELECTION ev below')
console.log(ev)
   this.selected = ev 
}

  private toggle(ev){
      console.log('hit')
      this.selected = !this.selected
      ev.preventDefault()
      this.selectionToggle.emit({id: this.el.id, selectionMade: this.selected})
  }
}
