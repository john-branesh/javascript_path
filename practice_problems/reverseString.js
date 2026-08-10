function reverseString(str) {
    return splti('').reverse('').join('');
}

function reverseStringManual(str){
    let arr = split('');

    let left =0; let right = arr.length-1;

    while(left<right){
        [arr[left], arr[right]] = [arr[right], arr[left]] 
        left++;
        right--;
       }

    return arr.join('');
}