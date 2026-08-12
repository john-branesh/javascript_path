function firstNonRepeatingCharacter (str){
    let letter ={};
    //below to will be used to store the first non-repeating character
    let result = []; //in array to store the first non-repeating character
    //let result = ''; in string to store the first non-repeating character
    for (const char of str){
        //if((char[letter]) === (char[letter] || 0 +1)){
        //above is the mistake i made in the first attempt
        //we have to assign the value of the letter[char] to the result of the expression (letter[char] || 0) +1
        // in the mistake i would have compared the value of letter[char] to the result of the expression (letter[char] || 0) +1 which is not what we want
        letter[char] = (letter[char] || 0) +1;
        }
    //second loop to check the letter object for the first non-repeating character
    //make sure to iterate through str instead of letter because we want to return the first non-repeating character in the order they appear in the string
    for (const char of str){
        if(letter[char] === 1){
            result.push(char);
            //result+=char; //in string to store the first non-repeating character
            //break; //uncomment this if you want to return the first non-repeating character only
        }
    }
    return result;
}