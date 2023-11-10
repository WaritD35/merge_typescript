// Please write a typescript project with unit test:

// For implementing function with this interface
//     merge (int[] collection_1, int[] collection_2) : int []

// given
//      collection_1, collection_2 already sorted from min(0) to max

// Please provide accessible repo of typescript project with unit test
// and provide how to setup dependency and execute code and unit test

// Note: Don't allow to use any sort function

// merge collection 1 and 2 
// separate into 2 parts
// 1. Append the minimum from each collection (one of the collection might gone first)
// 2. Append the remaining from each collection (both 1 and 2)

// const collection1 = [1, 2, 3];
// const collection2 = [4, 5];
// const merged = merge(collection1, collection2);

// console.log(merged);

export function merge(collection1: number[], collection2: number[]):number[] {
    const merged_collection: number[] = [];
    let pointer1 = 0;
    let pointer2 = 0;
    
    // 1. Append the minimum from each collection (one of the collection might gone first)
    while (pointer1 < collection1.length && pointer2 < collection2.length) {
        if (collection1[pointer1] < collection2[pointer2]) {
            merged_collection.push(collection1[pointer1]);
            pointer1++;
        } 
        else{
            merged_collection.push(collection2[pointer2]);
            pointer2++;
        }
    }
  
    // 2. Append the remaining from each collection (both 1 and 2)
    while (pointer1 < collection1.length) {
        merged_collection.push(collection1[pointer1]);
        pointer1++;
    }
  
    while (pointer2 < collection2.length) {
        merged_collection.push(collection2[pointer2]);
        pointer2++;
    }

    return merged_collection;
  }