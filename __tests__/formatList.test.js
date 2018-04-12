import {formatList} from '../formatList';

test('can format a list', () => {
  const myListName = 'The A-Team';
  const myList = [
    {name: 'John "Hannibal" Smith'},
    {name: 'George Peppard'},
    {name: 'Howling Mad Murdock'},
    {name: 'Templeton Peck'},
    {name: 'Dirk Benedict'},
    {name: 'B. A. Baracus'},
  ];
  const formattedList = formatList(myListName, myList, 'name')

})