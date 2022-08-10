function doit(input) {
    let lines = input.split('\n')
    let t = parseInt(lines[0])
    let line = 1
    while(t--) {
        let [n] = lines[line].trim().split(' ').map(Number)
        line++
        let arr = lines[line].trim().split(' ').map(Number)
        line++
        
        let l = 0
        let r = 1
        let mx = arr[0]
        let cur = arr[0]
        
        for (let i = 1;i < n;i++) {
            mx = Math.max(mx, cur)
            if (cur < 0) {
                cur = arr[i]
            } else {
                cur += arr[i]
            }
        }
        
        mx = Math.max(mx, cur)
        console.log(mx)
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