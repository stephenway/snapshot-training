import { sortArray } from '../sortArray';

test('sort arrays', () => {
  const numbers = [4, 2, 5, 1, 3];
  const sortedArray = sortArray(numbers);

  expect (sortedArray).toMatchSnapshot();
});