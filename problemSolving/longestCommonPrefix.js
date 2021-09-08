var longestCommonPrefix = function(strs) {
    let commonPrefix = ""; 
    let pointer = 0; 
    let minStr = Math.min(strs[0].length, strs[1].length); 
    while(pointer < minStr){
        if(strs[0][pointer] === strs[1][pointer]){
            commonPrefix += strs[0][pointer]
        }
        pointer++;
    }
    
    strs.splice(0, 2);
    pointer = 0; 
    
    
    console.log(commonPrefix)
    if(commonPrefix.length !== 0){
        let counter = 0; 
        let currentWord = strs[counter];
        while(pointer < currentWord.length && counter < strs.length){
            if(pointer <= commonPrefix.length){
                if(commonPrefix[pointer] !== strs[counter][pointer]){
                    commonPrefix = commonPrefix.substring(0, commonPrefix.length - 1);
                }
                pointer++; 
            } else {
                pointer = 0; 
                counter++; 
            }
        }
    }
    
    return commonPrefix 
};