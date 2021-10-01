var strStr = function(haystack, needle){
    if(needle.length === 0) return 0; 
    if(needle.length > haystack.length) return -1; 
    
    let haystackCounter = 0, needleCounter = 0, indexArr = []; 
    while(haystackCounter < haystack.length){
        if(haystack[haystackCounter] !== needle[needleCounter]){
            haystackCounter++; 
        } else{
            indexArr.push(haystackCounter); 
            haystackCounter++;
            needleCounter++;  
        }
    }
    
    if(indexArr.length === 0) return -1; 
    return indexArr[0]; 
    
    
};