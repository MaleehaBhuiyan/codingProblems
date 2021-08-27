var isValid = function(s) {
    let symbols = {
        '(' : ')',
        '[' : ']',
        '{' : '}'
        
    }
    
    if(s.length === 0){
        return true 
    } else if(s[0] === '('){
        if(s[1] === symbols['(']){
            s = s.slice(2)
        } else if(s[s.length - 1] === symbols['(']){
             s = s.slice(1, -1)
        } else{
            return false 
        }
    } else if(s[0] === '['){
        if(s[1] === symbols['[']){
            s = s.slice(2)
        } else if(s[s.length - 1] === symbols['[']){
            s = s.slice(1, -1)
        } else{
            return false 
        }
    } else if(s[0] === '{'){
        if(s[1] === symbols['{']){
            s = s.slice(2)
        } else if(s[s.length - 1] === symbols['{']){
            s = s.slice(1, -1)
        } else{
            return false 
        }
    }
    
    return isValid(s)
   
    

};