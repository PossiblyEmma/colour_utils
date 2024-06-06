import {hasSufficientContrast} from './hasSufficientContrast';

describe('hasSufficientContrast', () => {
  it('should return true if the provided colour has sufficient contrast with white', () => {
    expect(hasSufficientContrast('#000')).toBe(true);
  });
  it('should return false if the provided colour has insufficient contrast with white', () => {
    expect(hasSufficientContrast('#fff')).toBe(false);
  });
  it('should determine sufficient contrast with a non-white background', () => {
    expect(hasSufficientContrast('#fff', '#000')).toBe(true);
  });
  it('should determine sufficient contrast with a custom threshold', () => {
    expect(hasSufficientContrast('#666', '#fff', 4.5)).toBe(true);
  });
});
