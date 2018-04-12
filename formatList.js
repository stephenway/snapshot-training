/**
 * This function formalizes a set of items into something more readable for a user.
 * @param {string} listName 
 * @param {object} items 
 * @param {string} key 
 */
export function formatList(listName, items, key) {
  return `These are the items in the ${listName}:${
    items.reduce((itemsList, item) => {
      return `${itemsList}\n-  ${key ? item[key] : item}`
    }, '')
  }`
}