/**
 * Converts a string to camelCase format
 *
 * @param {string} str String to be converted
 * @returns converted string
 */
export const toCamelCase = (str: string) => {
  return str.replace(/([-_\s]+[a-z])/gi, $1 => {
    return $1
      .toUpperCase()
      .replace(/-/g, '')
      .replace(/_/g, '')
      .replace(/\s/g, '');
  });
};

/**
 * Converts a string to camelCase format
 *
 * @param {string} str String to be converted
 * @returns converted string
 *
 * @see {@link https://regex101.com/r/EMrqS7/1}
 */
export const toCssVariable = (str: string) => {
  return `-${str.replace(/([_\s]+\w|(?<=[a-z])[A-Z\d]|^\w)/g, $1 => {
    return `-${$1.toLowerCase()}`;
    })}`;
};

export default {
  toCamelCase
}
