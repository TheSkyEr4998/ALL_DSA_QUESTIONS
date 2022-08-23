function doit(input) {
    let lines = input.split('\n')
    let k = parseInt(lines[0])
    let arr = lines[1].trim().split(' ').map(Number)
    let dep = lines[2].trim().split(' ').map(Number)
    let req = []
    
    let mx_dep = 0
    
    for (let i = 0;i <= dep.length;i++) {
        if (dep[i] > mx_dep) {
            mx_dep = dep[i]
        }
    }
    
    for (let i = 0;i <= mx_dep + 5;i++) {
        req.push(0)
    }
    
    for (let i = 0;i < arr.length;i++) {
        req[arr[i]]++
        req[dep[i] + 1]--
    }
    
    let mxx = req[0]
    for (let i = 1;i <= mx_dep;i++) {
        req[i] += req[i - 1]
        if (req[i] > mxx) {
            mxx = req[i]
        }
    }
    if (mxx > k) {
        console.log("Not Possible")
    } else {
        console.log("Possible")
    }
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