var longestCommonPrefix = function(strs) {
    let commonPrefix = strs[0]; 
    
    for(let i = 1; i < strs.length; i++){
        if(commonPrefix.length > strs[i].length){
            commonPrefix = commonPrefix.substring(0, strs[i].length)
        }
        for(let j = 0; j < strs[i].length; j++){
            if(commonPrefix[j] !== strs[i][j]){
                commonPrefix = commonPrefix.substring(0, j); 
            }
        }
    }
    
    return commonPrefix; 
};