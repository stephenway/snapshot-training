/**
 * Changes the order of the passed in array by numberical value
 * @param {array} numbers 
 */

export function sortArray(numbers) {
  const sortedArray =
    numbers.sort(function(a, b) {
      return a - b;
  })
  return sortedArray;
}