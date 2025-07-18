/**
 * Capitalises the first letter of a given string.
 *
 * @param {string} string - The string to capitalise
 * @returns {string} - The string with the first letter capitalised
 *
 * @example capitalise('hello world');
 * // Returns 'Hello world'
 */

function capitalise(string: string): string {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export default capitalise;
