function sum_of_dig(n) {
    let sum = 0
    
    while (n > 0) {
        sum += (n % 10)
        n = parseInt(n / 10)
    }
    
    return sum
}

function doit(input) {
    let [n, m] = input.trim().split(' ').map(Number)
    
    let h = n
    let r = m
    
    if (r > h) {
        h = m
        r = n
    }
    
    let ma = {}
    ma[h] = 1
    
    while (r < h) {
        if (r in ma) {
            console.log(r)
            return
        }
        r += sum_of_dig(r)
        h += sum_of_dig(h)
        ma[h] = 1
    }
    
    console.log(-1)
}


process.stdin.resume();
process.stdin.setEncoding("ascii");
let read = "";
process.stdin.on("data", function (input) {
    read += input;
});
process.stdin.on("end", function () {
    read = read.replace(/\n$/, "");
    read = read.replace(/\n$/, "");
    
    doit(read)
});