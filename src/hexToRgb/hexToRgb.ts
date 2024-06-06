import {RGB} from '../types';
import {isValidHexColour} from '../isValidHexColour/isValidHexColour';

/**
 * Converts a hexadecimal colour code into an array of numbers representing the
 * colour's RGB values. If the hex code includes an alpha value, it is ignored.
 *
 * @param hex hexadecimal colour code, with or without #, with or without alpha
 * @returns array of three numbers, representing matching r, g and b values
 */
export function hexToRgb(hex: string): RGB {
  if (!isValidHexColour(hex))
    throw new Error(`${hex} is not a valid hexadecimal colour code.`);

  // Remove # if present
  if (hex[0] === '#') hex = hex.slice(1);

  // Remove alpha value if present
  if (hex.length === 4) {
    hex = hex.slice(0, 3);
  } else if (hex.length === 8) {
    hex = hex.slice(0, 6);
  }

  // Convert 3-character code to 6-characters
  if (hex.length === 3) {
    hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
  }

  const r = parseInt(hex.slice(0, 2), 16);
  const g = parseInt(hex.slice(2, 4), 16);
  const b = parseInt(hex.slice(4, 6), 16);

  return [r, g, b];
}
