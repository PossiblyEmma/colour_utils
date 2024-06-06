import {RGB} from '../types';

/**
 * Calculates the relative luminance of a colour using 8-bit RGB values.
 * The formula being used is described here:
 * https://www.w3.org/TR/2008/REC-WCAG20-20081211/#relativeluminancedef
 *
 * @param rgb Array of three number representing 8-bit RGB values
 * @returns a number representing relative luminance of the provided colour
 */
export function getRelativeLuminance(rgb: RGB): number {
  const [r, g, b] = rgb.map(c => {
    // Convert colour value from range 0–255 to 0–1
    c /= 255;

    // Get linear RGB value
    return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
  });

  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}
