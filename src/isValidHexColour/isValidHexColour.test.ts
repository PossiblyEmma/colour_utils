import {isValidHexColour} from './isValidHexColour';

describe('isValidHex', () => {
  it('should return true for a three-character hex code with #', () => {
    const hex = '#AAA';
    expect(isValidHexColour(hex)).toBe(true);
  });
  it('should return true for a three-character hex code without #', () => {
    const hex = 'AAA';
    expect(isValidHexColour(hex)).toBe(true);
  });
  it('should return true for a four-character hex code with #', () => {
    const hex = '#AAAA';
    expect(isValidHexColour(hex)).toBe(true);
  });
  it('should return true for a four-character hex code without #', () => {
    const hex = 'AAAA';
    expect(isValidHexColour(hex)).toBe(true);
  });
  it('should return true for a six-character hex code with #', () => {
    const hex = '#AAAAAA';
    expect(isValidHexColour(hex)).toBe(true);
  });
  it('should return true for a six-character hex code without #', () => {
    const hex = 'AAAAAA';
    expect(isValidHexColour(hex)).toBe(true);
  });
  it('should return true for a eight-character hex code with #', () => {
    const hex = '#AAAAAAAA';
    expect(isValidHexColour(hex)).toBe(true);
  });
  it('should return true for a eight-character hex code without #', () => {
    const hex = 'AAAAAAAA';
    expect(isValidHexColour(hex)).toBe(true);
  });
  it('should return false if the string is not a valid hex code', () => {
    const nonHex = 'this is not a hex string';
    expect(isValidHexColour(nonHex)).toBe(false);
  });
});
