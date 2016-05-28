import {
  async,
  beforeEachProviders,
  describe,
  ddescribe,
  expect,
  iit,
  it,
  inject
} from '@angular/core/testing';
import {ComponentFixture, TestComponentBuilder} from '@angular/compiler/testing';
import { provide, Component, ElementRef } from '@angular/core';
import { CsLiDragger } from './cs-li-dragger.directive';



@Component({
  selector: 'cs-dragger',
  template: `<div class="is-selected" cs-dragger></div>`
})
class TestComponent {}

describe('CsLiDragger Directive', () => {
  beforeEachProviders((): any[] => []);
    
  it('should ...', async(inject([TestComponentBuilder], (tcb:TestComponentBuilder) => {
    return tcb.createAsync(TestComponent).then((fixture: ComponentFixture<any>) => {
      fixture.detectChanges();
      let el: ElementRef
      let el2: ElementRef
      let x = new CsLiDragger(el)
      let y = new CsLiDragger(el2)
      y.onDragEnd(el)
      expect(x.classContains('is-selected')).toBeTrue(true)
      expect(y.classContains('oriinlsdlfkax')).toBeTrue(false)
      
//function classContains(cssClass){
//    // let reg = new RegExp(cssClass, "g")
//    //console.log( this.el.nativeElement.className.match(cssClass) )
//    return "is-selected original".match(cssClass) 
//    //return this.el.nativeElement.className.match(cssClass) 
//}
//function includeClass(cssClass){
//    let className = "original blah is-selecteded ";     
//    className += ` ${cssClass} `
//    return className
//}
//function removeCLass(cssClass){
//    let  reg = new RegExp(cssClass,"g");
//    let elem = "is-selected original ".replace(reg, '')
//    return elem
//}
//let test = 'is-selected'
////classContains('is-selected')
////classContains('sfsd-df')
////classContains(test)
//console.log(classContains('is-selected'))
//console.log(classContains('is-sflsdfkj'))
//console.log(classContains(test))
//console.log(classContains('original'))
//console.log(removeCLass('is-selected'))
//console.log(removeCLass('original'))
//console.log(includeClass('original'))
//console.log(includeClass('blah'))
//console.log(includeClass('aldfg bl'))
    });
  })));
});
