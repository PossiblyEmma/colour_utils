import {getRelativeLuminance} from '../getRelativeLuminance/getRelativeLuminance';
import {hexToRgb} from '../hexToRgb/hexToRgb';

/**
 * Gets the contrast ratio between two colours based on relative luminance.
 * Colours must be provided in hexadecimal format.
 *
 * The formula being used is described by WCAG here:
 * https://www.w3.org/TR/2008/REC-WCAG20-20081211/#contrastratio
 *
 * @param colour1 first colour to compare, in hexadecimal format
 * @param colour2 second colour to compare, in hexadecimal format
 * @param decimalPlaces (optional) precision of result, in decimal places. Default 2.
 * @returns
 */
export function getContrastRatio(
  colour1: string,
  colour2: string,
  decimalPlaces = 2
): number {
  const rgb1 = hexToRgb(colour1);
  const rgb2 = hexToRgb(colour2);

  const luminance1 = getRelativeLuminance(rgb1);
  const luminance2 = getRelativeLuminance(rgb2);

  const contrastRatio =
    luminance2 > luminance1
      ? (luminance2 + 0.05) / (luminance1 + 0.05)
      : (luminance1 + 0.05) / (luminance2 + 0.05);

  return +contrastRatio.toFixed(decimalPlaces);
}
