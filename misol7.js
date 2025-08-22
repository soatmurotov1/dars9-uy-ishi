












function phoneNumber(arr){
    let bosh = arr.slice(0, 3).join("")
    let urta = arr.slice(3, 6).join("")
    let ohiri = arr.slice(6, 9).join("")
    console.log(arr);
    console.log(`(${bosh}) ${urta}-${ohiri}`);
    
    
}


let arr = [1,2,3,4,5,6,7,8,9,0]
phoneNumber(arr)