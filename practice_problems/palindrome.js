//we can use two pointer here also

function palindrome(str){
    let arr = str.split('');
    let left =0;
    let right = arr.length - 1;

    while (left<right){
        if (!arr[left] === arr[right]){
            return false;
            left++;
            right--;
        } else {
            return true;
        }
    }
    return arr.join('');
}