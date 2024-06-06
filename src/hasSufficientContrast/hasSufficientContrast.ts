import {getContrastRatio} from '../getContrastRatio/getContrastRatio';

/**
 * Determines if a provided foreground colour has a contrast ratio greater with
 * the background which is greater than the threshold.
 *
 * Primarily designed for ensuring compliance with WCAG accessibility standards.
 * Defaults for background and threshold are set to determine compliance with
 * AAA standard for body text on a white background.
 *
 * @param foreground foreground colour in hexadecimal format
 * @param background background colour in hexadecimal format. Defaults to pure white
 * @param threshold contrast ratio threshold for what is considered "sufficient"
 *   contrast. Defaults to 7, which is WCAG AAA standard for body text. Other
 *   common thresholds are 4.5 (AAA large text and AA body text) and 3
 *   (AA large text and active non-text UI elements). For more info see:
 *   https://developer.mozilla.org/en-US/docs/Web/Accessibility/Understanding_WCAG/Perceivable/Color_contrast
 * @returns true if contrast ratio is >= threshold, else false
 */
export function hasSufficientContrast(
  foreground: string,
  background = '#FFF',
  threshold = 7
): boolean {
  const contrastRatio = getContrastRatio(foreground, background);
  return contrastRatio >= threshold;
}
