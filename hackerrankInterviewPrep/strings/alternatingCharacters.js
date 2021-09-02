function alternatingCharacters(s) {
    let deletions = 0; 
    
    for(let i = 0; i < s.length; i++){
        if(s[i] === s[i-1]){
            deletions++
        }
    }
    
    return deletions; 

}