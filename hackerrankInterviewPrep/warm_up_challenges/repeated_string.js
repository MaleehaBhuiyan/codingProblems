function repeatedString(s, n) {
    if(s.length === 1 && s[0] === 'a') return n
    let a = 0,
        total = 0,
        numOfStr = Math.floor(n / s.length),
        remainder = n % s.length
        
    for(let i = 0; i < s.length; i++){
        if(s[i] === 'a') a++ 
    }
    
    total = numOfStr * a 
    
    if(remainder > 0){
        for(let i = 0; i < remainder; i++){
            if(s[i] === 'a') total++ 
        }
    }
    
    return total
    
}