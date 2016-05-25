import {
  async,
  beforeEachProviders,
  describe,
  ddescribe,
  expect,
  iit,
  it,
  inject,
} from '@angular/core/testing';
import {ComponentFixture, TestComponentBuilder} from '@angular/compiler/testing';
import { provide, Component } from '@angular/core';
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
      let x = fixture.componentInstance
      expect(x.hasClass('is-selected')).toBe(true)
    });
  })));
});
