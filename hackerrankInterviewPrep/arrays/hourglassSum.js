function hourglassSum(arr) {
    let topSums = [], bottomSums = [], middleSums = [], totalSums = []
    
    function top(arr){
      for(let i = 0; i < 4; i++){
          for(let j = 0; j < 4; j++){
              let top = arr[i][j] + arr[i][j + 1] + arr[i][j+2]
              topSums.push(top)
          }
      }
    }
    
    function bottom(arr){
        for(let i = 2; i <= 5; i++){
            for(let j = 0; j < 4; j++){
                let bottom = arr[i][j] + arr[i][j + 1] + arr[i][j+2]
                bottomSums.push(bottom)
            }
        }
    }
    
    function middle(arr){
        for(let i = 1; i <= 4; i++){
            for(let j = 1; j <= 4; j++){
                let middle = arr[i][j]
                middleSums.push(middle)
            }
        }
    }
    
    function total(topSums, bottomSums, middleSums){
        for(let i = 0; i < 16; i++){
            let total = topSums[i] + bottomSums[i] + middleSums[i]
            totalSums.push(total)
        }
    }
    
    top(arr)
    bottom(arr)
    middle(arr)
    total(topSums, bottomSums, middleSums)
   
   let maxSum = Math.max(...totalSums)
   
   return maxSum
       
    
}