// input would be prices
// we have to find the max profit based on the given returns
// min price is assumed as infinity so the initial valuse be automaticall goes into min
// next day returns be compared with min if lesser new one be the min 
// now max has to be founf which is (today value - min) should be greater than max
// we initially assume max as 0 since no values are there initially to conclude
// else if is used to make sure the steps go thorugh each conditions

function maxProfit(prices){
    let minPrice = infinity;
    let maxPrice = 0;
    for (const price of prices){
        if(price<minPrice){
            minPrice = price;
        } else if ((price - minPrice) > maxPrice) {
            maxPrice = (price - minPrice);
        }
    }
    return maxPrice;
}




