/**
 * Checks whether a provided string is a valid hexadecimal colour code.
 * Supports three- and six-character hex codes,
 * as well as four- and eight-character codes with an alpha value.
 * The leading # is optional and will be ignored when assessing the validity
 * of the hex code.
 *
 * @param s string to test against valid hex colour pattern
 * @returns true if s is a valid hex colour, else false
 */
export function isValidHexColour(s: string): boolean {
  const validHexPattern = /^#?([0-9A-F]{3,4}){1,2}$/i;
  return validHexPattern.test(s);
}
