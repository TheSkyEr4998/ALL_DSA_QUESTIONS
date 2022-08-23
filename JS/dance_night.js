function doit(input) {
    let lines = input.split('\n')
    let line = 0
    
    let t = parseInt(lines[line])
    line++
    
    while (t --) {
        let [n, m] = lines[line].trim().split(' ').map(Number)
        line++
        let boys = lines[line].trim().split(' ').map(Number)
        line++
        let girls = lines[line].trim().split(' ').map(Number)
        line++
        
        boys.sort((a, b) => a - b)
        girls.sort((a, b) => a - b)
        
        let ct = 0
        let bi = 0
        let gi = 0
        
        while (bi < n && gi < m) {
            if (boys[bi] > girls[gi]) {
                ct++
                bi++
                gi++
            } else {
                break
            }
        }
        
        if (ct == n) {
            console.log("YES")
        } else {
            console.log("NO")
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