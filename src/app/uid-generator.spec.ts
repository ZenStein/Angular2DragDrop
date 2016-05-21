import {
  describe,
  ddescribe,
  expect,
  iit,
  it
} from '@angular/core/testing';
import {UidGenerator} from './uid-generator';

describe('UidGenerator', () => {
  it('should create an instance', () => {
    expect(new UidGenerator()).toBeTruthy();
  });
  it('shoud generate an \'A\' when passed a 0', () => {
      let ctyle = new UidGenerator() 
    expect(ctyle.generate(0)).toEqual('A');
  });
  it('should be AA given(26)', () => {
      let ctyle = new UidGenerator() 
    expect(ctyle.generate(26)).toEqual('AA');
  });
  it('should be A_0 given(0,0)', () => {
      let ctyle = new UidGenerator() 
    expect(ctyle.generate(0,0)).toEqual('A_0');
  });
  it('shoud generate an \'A_0\' when passed (0, 0)', () => {
      let ctyle = new UidGenerator() 
    expect(ctyle.generate(0,1)).toEqual('A_1');
  });
  it('should start with AA when passed 26', () => {
      let ctyle = new UidGenerator() 
    expect(ctyle.generate(26,1)).toEqual('AA_1');
  });
  it('should start with BB when passed 27', () => {
      let ctyle = new UidGenerator() 
    expect(ctyle.generate(27,1)).toEqual('BB_1');
  });
  it('should start with BB when passed 27', () => {
      let ctyle = new UidGenerator() 
    expect(ctyle.generate(52,0)).toEqual('AAA_0');
  });
  it('should be ZZ_5 given(51,5)', () => {
      let ctyle = new UidGenerator() 
    expect(ctyle.generate(51,5)).toEqual('ZZ_5');
  });
});
