// Push zeros to right side
// Goal:
// 1. Push the zeros to left side from the given array
// Solution:
// 1. Whenever I find non-zero I have to push it to the left
// 2. So the start position is 0 for this I will create a var insertPos
// 3. I have to iterate through the given array 
// 	I will use for loop
// 4. What will you do using for loop?
// 	a. I will iterate through given arr
// 	b. If I find non-zero I will assign it to the insertPos/left position where zero that is available 
// 5. Once assigned I have to increase the insertPos value, how?
// 	a. I think += will do
// 6. I remember chat got saying it will overwrite the values not replace, to handle that we will use while loop
// 7. To be frank I have no idea how this while loop works
// 8. I guess in while loop we have to assign 0 but to who? I don't know.
// 9. I remember using insertPos++ not insertPos+=1 but what's the difference.
// 10. Don't we wanna return anything? So im returning arr.

function pushZeros(arr){
	let insertPos = 0;

	for (let i=0; i<arr.length; i++){
		if (arr[i] !== 0){
		arr[insertPos] = arr[i];
		insertPos++; //inserPos+=1 is also same as insertPos++ but insertPos++ is more readable and easy to understand
		}
	}

	while (insertPos<arr.length){
	    //assign zero to who?
        arr[insertPos] = 0;
	    insertPos++; 
	}
	return arr;
}

console.log(pushZeros([0,1,0,3,12])); // [1,3,12,0,0]
