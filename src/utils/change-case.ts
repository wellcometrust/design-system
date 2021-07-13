import kebabCase from 'lodash/fp/kebabCase';

/**
 * Converts a string to CSS variable format
 * (hyphens and lowercase letters with a "--" prefix)
 *
 * @param {string} str String to be converted
 * @returns converted string
 */
export const toCssVariable = (str: string): string => {
  return `--${kebabCase(str)}`;
};

export default {
  toCssVariable
}
