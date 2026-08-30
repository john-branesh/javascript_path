//i have to divide the given array into half and search
// i dont know waht is mid i dunno if i can assign any numeber to mid but my mid should be target right?
// consider array is sorted
// here right, left and mid are positions, arr/2 is literal english which the code wont accept
// we are learning coding not teaching english

function binarySearch(arr, target){
    let left = 0;
    let right = arr.length-1;

    while (left <= right){
        const mid = math.floor((left+right)/2);
        if (arr[mid] === target) return mid;
        if (arr[mid] > target) left = mid+1;
        else right = mid-1;
    }

    return -1;

}