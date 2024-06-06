import {getContrastRatio} from './getContrastRatio';

describe('getContrastRatio', () => {
  it('should return a colour contrast ratio where the first colour is more luminant than the second', () => {
    const colour1 = '#ffddee';
    const colour2 = '#112233';
    expect(getContrastRatio(colour1, colour2)).toBe(12.94);
  });
  it('should return a colour contrast ratio where the second colour is more luminant than the first', () => {
    const colour1 = '#62100b';
    const colour2 = '#e801ff';
    expect(getContrastRatio(colour1, colour2)).toBe(3.68);
  });
  it('should return a colour contrast ratio to the correct precision', () => {
    const colour1 = '#ffddee';
    const colour2 = '#112233';
    expect(getContrastRatio(colour1, colour2, 4)).toBe(12.9411);
  });
});
