function reverseString(str) {
    return splti('').reverse('').join('');
}

// two pointer method
function reverseStringManual(str){
    // Turn the text into a list of single letters.
    let arr = str.split('');

    // Start one marker at the first letter.
    let left = 0;
    // Start the other marker at the last letter.
    let right = arr.length - 1;

    // Keep going until the two markers meet in the middle.
    while (left < right) {
        // Swap the letters at the left and right positions.
        [arr[left], arr[right]] = [arr[right], arr[left]];

        // Move the left marker one step toward the middle.
        left++;
        // Move the right marker one step toward the middle.
        right--;
    }

    // Turn the list of letters back into one text string.
    return arr.join('');
}