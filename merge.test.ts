import { merge } from './merge';
    
describe('merge function', () => {
  test('should merge two sorted arrays', () => {
    const collection1 = [1, 3, 5, 7];
    const collection2 = [2, 4, 6, 8];
    const merged = merge(collection1, collection2);
    expect(merged).toEqual([1, 2, 3, 4, 5, 6, 7, 8]);
  });

  test('should merge arrays of different lengths', () => {
    const collection1 = [1, 2, 3, 8, 10 ,12];
    const collection2 = [4, 5, 9];
    const merged = merge(collection1, collection2);
    expect(merged).toEqual([1, 2, 3, 4, 5, 8, 9, 10, 12]);
  });

  it('should merge when one array is empty', () => {
    const collection1 = [1, 2, 4];
    const collection2: number[] = [];
    const merged = merge(collection1, collection2);
    expect(merged).toEqual([1, 2, 4]);
  });


});
