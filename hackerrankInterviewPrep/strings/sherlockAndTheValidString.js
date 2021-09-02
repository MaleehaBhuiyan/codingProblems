function isValid(s) {
    let frequencyCounter = {};
    
    for(let val of s){
        frequencyCounter[val] = (frequencyCounter[val] || 0) + 1 
    }
    
    let vals = Object.values(frequencyCounter);
    //let maxNum = Math.max(...vals);
    let removeChar = 0;  
    let counter = 0; 
    
    while(counter < vals.length){
        if(vals[0] !== vals[counter]){
           removeChar++; 
        }
        counter++; 
    }
     //console.log(vals)
     //console.log(removeChar)
    if(removeChar > 1) return 'NO'
    return 'YES' 

}