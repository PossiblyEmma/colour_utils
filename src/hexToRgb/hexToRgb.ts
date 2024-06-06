import {RGB} from '../types';
import {normaliseHexColour} from '../normaliseHexColour/normaliseHexColour';

/**
 * Converts a hexadecimal colour code into an array of numbers representing the
 * colour's RGB values. If the hex code includes an alpha value, it is ignored.
 *
 * @param hex hexadecimal colour code, with or without #, with or without alpha
 * @returns array of three numbers, representing matching r, g and b values
 */
export function hexToRgb(hex: string): RGB {
  hex = normaliseHexColour(hex, {includeHash: false});

  const r = parseInt(hex.slice(0, 2), 16);
  const g = parseInt(hex.slice(2, 4), 16);
  const b = parseInt(hex.slice(4, 6), 16);

  return [r, g, b];
}
