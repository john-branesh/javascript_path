// run fi=unction only after call stops for x milliseconds

// 1. store time
// 2. return a new function
// 3. every call:
//      3a. cancel previous call
//      3b. reset the timer
// 4. if no new call comes
//      4a. timer finishes
//      4b. execute original function

//  core:
//  clearTimeout(timer)
//  setTimeout(fn, delay)

// debounce = keep reseting until calls stop


function debounce (fn, delay){
    // timer here is undefined we are mentioning here so it would get saved/updated whenever timer resets
    let timer;
    // yes in js functions without name is allowed 
    // debounce is a method uses another function as input which is (fn) that (fn) function will have a
    // input that is args 
    // example: function playbackState(state), here based on the display state may change and that would be args
    return function(...args){
        // its getting cleared when new query or trigger comes before timeout
        clearTimeout(timer);
        timer = setTimeout(() => fn.apply(this, args), delay);
    };
}

