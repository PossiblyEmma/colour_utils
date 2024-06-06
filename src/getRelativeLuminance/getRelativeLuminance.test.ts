import {RGB} from '../types';
import {getRelativeLuminance} from './getRelativeLuminance';

describe('getRelativeLuminance', () => {
  it('should return the relative luminance of a dark colour', () => {
    const colour: RGB = [6, 3, 1];
    const result = +getRelativeLuminance(colour).toFixed(4);
    expect(result).toBe(0.0011);
  });
  it('should return the relative luminance of a light colour', () => {
    const colour: RGB = [223, 251, 240];
    const result = +getRelativeLuminance(colour).toFixed(4);
    expect(result).toBe(0.9097);
  });
});
