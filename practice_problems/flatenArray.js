// remove all array inside the array and make intoo single array
// input would be array
// we have to store the result in a new array
// we have to check the input array that if it has other arrays in it or not
// to do that we can use a for loop to iterate inside the given loop
// it should have if statement, this is to check if another array is present or not
// if it is an array we have to flaten it, i,e. we want to remove the array and push the values inside it to the result array
// else put the value in result array.

function flatArr(arr){
    let result = [];

    for (const item of arr){
        if(Array.isArray(itemt)){
            result = result.concat(flatten(item));
        } else {
            result.push(item);
        }
    }
    return result;
}