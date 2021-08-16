function countingValleys(steps, path) {
    let seaLevel = 0 
    let distance = [0]
    let valley = 0 
    let mountain = 0 
    for(let i = 0; i < path.length; i++){
        if(path[i] === 'U'){
            seaLevel += 1 
            distance.push(seaLevel)
        }
        else if (path[i] === 'D'){
           seaLevel -= 1 
           distance.push(seaLevel) 
        }
    }
    
    distance.pop()
    for(let i = 0; i < distance.length; i++){
        if(distance[i] === 0){
            if(distance[i + 1] > 0) mountain++
            else if (distance[i + 1] < 0) valley++ 
        }
    }
    return valley
    
    
}