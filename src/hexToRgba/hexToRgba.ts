import {RGBA} from '../types';
import {hexToRgb} from '../hexToRgb/hexToRgb';
import {normaliseHexColour} from '../normaliseHexColour/normaliseHexColour';

/**
 * Converts a hexadecimal colour code into an array of numbers representing the
 * colour's RGBA values. If the hex code does not include an alpha value,
 * full opacity is assumed.
 *
 * @param hex hexadecimal colour code, with or without #, with or without alpha
 * @returns array of four numbers, representing matching r, g, b and a values
 */
export function hexToRgba(hex: string): RGBA {
  hex = normaliseHexColour(hex, {includeAlpha: true, includeHash: false});
  const rgb = hexToRgb(hex);
  const a = parseInt(hex.slice(6, 8), 16);
  return [...rgb, a];
}
