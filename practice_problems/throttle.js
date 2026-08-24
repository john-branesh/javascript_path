function throttle (fn, limit){
    let inThrottle;

    return function (...args){
        if (!inThrottle){
            fn.apply(this. args);
            inThrottle = true;
            setTimeout(() => ((inThrottle = false), limit))
        }
    };

}

function checkPlaybackState (){
    console.log('checking playback');
}

const throttledCheck = throttle(checkPlaybackState, 1000);