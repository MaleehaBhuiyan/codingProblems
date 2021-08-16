function jumpingOnClouds(c) {
    let jumps = 0
    helper(c)
    function helper(c){
        if(c.length === 0) return jumps 
        else{
          if(c[0] === 0 && c[2] === 0) {
              jumps += 1  
              return(helper(c.slice(2))) 
          } else if(c[0] === 0 && c[1] === 0){
              jumps += 1  
              return(helper(c.slice(1)))
          }
        }
    }
    return jumps
}