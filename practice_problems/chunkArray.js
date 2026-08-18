// split the given array into the no (size) of given arrays
//  i+=size is because we want these arrays to have given no (size) of values
// slice() takes portion of an array
// slice(i, i + size) means slice(start, end) if i = 0 then i + size means 0 + 2 = 2
// the catch here is 2 = 0, 1 so it wont include 2




function chunkArray(arr, size){
    const result = [];

    for (let i=0; i<arr.length; i+=size){
        result.push(arr.slice(i, i + size));
    }
    return results;
}

// Create an empty result.

// Start at index 0.

// Take `size` elements.

// Put that chunk into result.

// Jump forward by `size`.

// Repeat until the array ends.

// Return result.
