import { test, expect } from '@jest/globals';
import joinNumbersFromRange from '../joinNumbersFromRange';

test('joinNumbersFromRange', () => {
  expect(joinNumbersFromRange(2, 2)).toEqual('2');
  expect(joinNumbersFromRange(1, 5)).toEqual('12345');
  expect(joinNumbersFromRange(10, 12)).toEqual('101112');
});
