function doit(input) {
    let lines = input.split('\n')
    let n = parseInt(lines[0])
    let s = lines[1].trim().split(' ').map(Number)
    let c = lines[2].trim().split(' ').map(Number)
    
    s.sort((a, b) => b - a)
    c.sort((a, b) => b - a)
    
    let mx = 0
    
    for (let i = 0;i < n;i ++) {
        mx += (s[i] * c[i])
    }
    
    console.log(mx)
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