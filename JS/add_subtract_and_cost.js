function doit(input) {
    let lines = input.split('\n')
    let t = parseInt(lines[0])
    line = 1
    
    while (t --) {
        let [n, k] = lines[line].trim().split(' ').map(Number)
        line++
        let arr = lines[line].trim().split(' ').map(Number)
        line++
        
        let ans = 100 * 5 * n
        for (let i = 0;i < n;i++) {
            let cost = []
            for (let j = 0;j < n;j++) {
                let c = -1 * 5
                if (arr[j] < arr[i]) {
                    c = 3
                }
                cost.push((arr[i] - arr[j]) * c)
            }
            cost.sort((a, b) => a - b)
            let tt = 0
            for (let j = 0;j < k;j++) {
                tt += cost[j]
            }
            if (tt < ans) {
                ans = tt
            }
        }
        console.log(ans)
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