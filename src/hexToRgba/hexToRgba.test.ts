import {hexToRgba} from './hexToRgba';

describe('hexToRgba', () => {
  it('should return an RGBA array for a 3-character hex code', () => {
    const hex = '#abc';
    expect(hexToRgba(hex)).toEqual([170, 187, 204, 255]);
  });
  it('should return an RGBA array for a 4-character hex code', () => {
    const hex = '#abcd';
    expect(hexToRgba(hex)).toEqual([170, 187, 204, 221]);
  });
  it('should return an RGBA array for a 6-character hex code', () => {
    const hex = '#ddeeff';
    expect(hexToRgba(hex)).toEqual([221, 238, 255, 255]);
  });
  it('should return an RGBA array for an 8-character hex code', () => {
    const hex = '#ddeeff11';
    expect(hexToRgba(hex)).toEqual([221, 238, 255, 17]);
  });
});
