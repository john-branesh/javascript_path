//we can use two pointer here also

function ispalindrome(str){
    //change the str into uniform text format
    const text = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    let left =0;
    //since text is a string we can use str.length to get the length of the string
    let right = text.length - 1;

    while (left<right){
        if (text[left] !== text[right]){
            return false;
        }
        //keep this out of if statement because we want to move the pointers regardless of whether the characters match or not
        left++;
        right--;
    }
    return true;
}

console.log(ispalindrome("A man, a plan, a caal: Panama"));