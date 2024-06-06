import {normaliseHexColour} from './normaliseHexColour';

describe('normaliseHexColour', () => {
  it('should throw an error if the provided value is not a valid hex colour code', () => {
    const nonHex = 'this is not a hex code';
    expect(() => normaliseHexColour(nonHex)).toThrow(
      'this is not a hex code is not a valid hexadecimal colour code.'
    );
  });

  it('should return an uppercase full-length hex code with leading hash and no alpha value by default', () => {
    const input = 'abcd';
    expect(normaliseHexColour(input)).toBe('#AABBCC');
  });

  it('should return a lowercase colour code', () => {
    const input = '#AABBCC';
    expect(normaliseHexColour(input, {capitalisation: 'LOWER'})).toBe(
      '#aabbcc'
    );
  });

  describe('short codes', () => {
    it('should return a 3-character hex code', () => {
      const input = 'abc';
      expect(normaliseHexColour(input, {forceFullLength: false})).toBe('#ABC');
    });
    it('should return a 4-character hex code', () => {
      const input = 'abcd';
      expect(
        normaliseHexColour(input, {includeAlpha: true, forceFullLength: false})
      ).toBe('#ABCD');
    });
  });

  describe('alpha values', () => {
    it('should add an alpha value to a 3-character hex code', () => {
      const input = 'abc';
      expect(
        normaliseHexColour(input, {includeAlpha: true, forceFullLength: false})
      ).toBe('#ABCF');
    });
    it('should add an alpha value to a 6-character hex code', () => {
      const input = 'a1b2c3';
      expect(normaliseHexColour(input, {includeAlpha: true})).toBe('#A1B2C3FF');
    });
    it('should remove an alpha value from a 4-character hex code', () => {
      const input = 'abcd';
      expect(normaliseHexColour(input, {forceFullLength: false})).toBe('#ABC');
    });
    it('should remove an alpha value from an 8-character hex code', () => {
      const input = 'a1b2c3d4';
      expect(normaliseHexColour(input)).toBe('#A1B2C3');
    });
  });

  it('should return a hex value without a leading #', () => {
    const input = '#abcdef';
    expect(normaliseHexColour(input, {includeHash: false})).toBe('ABCDEF');
  });
});
