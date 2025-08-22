









function min(arr){
    let array = []
    let max =Math.max(...arr)
    let min = Math.min(...arr)

    array.push(min)
    array.push(max)
    console.log(array);
    
    
    
}

let arr = [1, 2, 3 ,4,56,  5]
min(arr)