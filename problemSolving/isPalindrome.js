var isPalindrome = function(s) {
    
    s = s.replace(/[^0-9a-z]/gi, '')
    
    s = s.toLowerCase()
    
    helper(s)
    
   function helper(s){
       if(s.length === 0) return s 
       return s[s.length - 1] + helper(s.substring(0, s.length - 1))
   }
    
    if(s === helper(s)) return true; 
    return false; 
    
};