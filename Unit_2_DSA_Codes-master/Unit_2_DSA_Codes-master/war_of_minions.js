function doit(input) {
    let lines = input.split('\n')
    let n = parseInt(lines[0])
    let s = lines[1].trim()
    
    let stk = []
    for(let i = 0;i < s.length;i++) {
        if (stk.length == 0) {
            stk.push(s[i])
        } else {
            if (stk[stk.length - 1] == s[i]) {
                stk.pop()
            } else {
                stk.push(s[i])
            }
        }
    }
    if (stk.length == 0) {
        console.log("-1")
    } else {
        console.log(stk.join(''))
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