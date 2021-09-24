var isValid = function(s) {
    
    let obj = {
        "(" : ")",
        "[" : "]",
        "{" : "}"
    }
    
    let stack = [];
    
    for(let paran of s){
        if(obj.hasOwnProperty(paran)){
            stack.push(paran)
        } else {
            const closeParan = stack.pop(); 
            if(paran !== obj[closeParan]){
                return false; 
            }
        }
    }
    
    return stack.length === 0; 

    
};