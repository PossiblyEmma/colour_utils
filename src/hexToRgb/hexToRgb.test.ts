import {hexToRgb} from './hexToRgb';

describe('hexToRgb', () => {
  it('should throw an error if the provided string is not a valid hex colour code', () => {
    const nonHex = 'this is not a hex code';
    expect(() => hexToRgb(nonHex)).toThrow(
      'this is not a hex code is not a valid hexadecimal colour code'
    );
  });

  it('should return an array of RGB values for a 3-character hex code', () => {
    const hex = '#ABC';
    const expected = [170, 187, 204];
    expect(hexToRgb(hex)).toEqual(expected);
  });

  it('should return an array of RGB values for a 4-character hex code', () => {
    const hex = '#F2E4';
    const expected = [255, 34, 238];
    expect(hexToRgb(hex)).toEqual(expected);
  });
  it('should return an array of RGB values for a 6-character hex code', () => {
    const hex = '#E637BB';
    const expected = [230, 55, 187];
    expect(hexToRgb(hex)).toEqual(expected);
  });
  it('should return an array of RGB values for an 8-character hex code', () => {
    const hex = '#12BAC5DD';
    const expected = [18, 186, 197];
    expect(hexToRgb(hex)).toEqual(expected);
  });
  it('should return an array of RGB values for a hex code without a leading #', () => {
    const hex = '43EBEE';
    const expected = [67, 235, 238];
    expect(hexToRgb(hex)).toEqual(expected);
  });
});
