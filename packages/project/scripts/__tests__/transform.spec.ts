import { plainObject } from '../transform';

describe('Utils', () => {
  const sampleObject = { a: 1, b: { c: 2, d: 3, e: ['x', 'y', 'z'], f: { g: { h: true } } } };
  it('Should plain a object', () => {
    const result = plainObject(sampleObject);
    expect(result).not.toBeNil().toEqual({
      a: 1,
      'b.c': 2,
      'b.d': 3,
      'b.e.0': 'x',
      'b.e.1': 'y',
      'b.e.2': 'z',
      'b.f.g.h': true
    });
  });
  it('Should plain an object with separator', () => {
    const result = plainObject(sampleObject, { separator: '__' });
    expect(result).not.toBeNil().toEqual({
      a: 1,
      b__c: 2,
      b__d: 3,
      b__e__0: 'x',
      b__e__1: 'y',
      b__e__2: 'z',
      b__f__g__h: true
    });
  });
  it('Should plain an object with types', () => {
    const result = plainObject(sampleObject, { useTypes: true });
    expect(result).not.toBeNil().toEqual({
      a: 'number',
      'b.c': 'number',
      'b.d': 'number',
      'b.e.0': 'string',
      'b.e.1': 'string',
      'b.e.2': 'string',
      'b.f.g.h': 'boolean'
    });
  });
});
