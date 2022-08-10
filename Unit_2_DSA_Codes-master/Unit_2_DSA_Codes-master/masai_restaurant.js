function doit(input) {
    let lines = input.split('\n')
    let t = parseInt(lines[0])
    
    let stk = []
    
    for (let i = 1;i <= t;i++) {
        if (lines[i][0] == '1') {
            if (stk.length == 0) {
                console.log("No Food")
            } else {
                console.log(stk.pop())
            }
        } else {
            var [o, cost] = lines[i].trim().split(' ').map(Number)
            stk.push(cost)
        }
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