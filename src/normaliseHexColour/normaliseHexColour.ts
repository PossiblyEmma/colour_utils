import {isValidHexColour} from '../isValidHexColour/isValidHexColour';

type NormaliseHexColourOptions = {
  // Should the output use uppercase or lowercase letters
  capitalisation?: 'UPPER' | 'LOWER';

  // Should the output include an alpha value
  includeAlpha?: boolean;

  // Should the output include a leading # symbol
  includeHash?: boolean;

  // Should the output be forced to include a full 6 or 8 digits?
  // If false, output may be 3 or 4 digits.
  forceFullLength?: boolean;
};

/**
 * Takes a hexadecimal colour code and normalises it according
 * to the provided options
 *
 * By default, the colour code will be normalised to the following format:
 * * capitalisation: UPPER
 * * includeAlpha: false
 * * includeHash: true
 * * forceFullLength: true
 *
 * @param hex hexadecimal colour code to be normalised
 * @param options optional object with config for the expected output
 * @returns a properly formatted hexadecimal colour code
 */
export function normaliseHexColour(
  hex: string,
  options?: NormaliseHexColourOptions
): string {
  if (!isValidHexColour(hex))
    throw new Error(`${hex} is not a valid hexadecimal colour code.`);

  const capitalisation = options?.capitalisation ?? 'UPPER';
  const includeAlpha = options?.includeAlpha ?? false;
  const includeHash = options?.includeHash ?? true;
  const forceFullLength = options?.forceFullLength ?? true;

  // Remove leading hash if present to make manipulating code itself easier
  if (hex[0] === '#') hex = hex.slice(1);

  if (forceFullLength && hex.length < 6) {
    hex = hex
      .split('')
      .map(c => c + c)
      .join('');
  }

  if (includeAlpha) {
    if (hex.length === 3) {
      hex = hex + 'F';
    } else if (hex.length === 6) {
      hex = hex + 'FF';
    }
  } else {
    if (hex.length === 4) {
      hex = hex.slice(0, 3);
    } else if (hex.length === 8) {
      hex = hex.slice(0, 6);
    }
  }

  if (capitalisation === 'UPPER') {
    hex = hex.toUpperCase();
  } else {
    hex = hex.toLowerCase();
  }

  if (includeHash) hex = '#' + hex;

  return hex;
}
