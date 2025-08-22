









function kub(arr){
    let kub = []
    arr.forEach(i => {
        // console.log([i**3]);
        kub.push(i**3)
        
        
    });
    console.log(kub);
}

arr = [1, 2, 3, 4, 5, 6, 7, 8]
kub(arr)