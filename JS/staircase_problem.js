function doit(input) {
    let lines = input.split('\n')
    let t = parseInt(lines[0])
    let line = 1
    while(t--) {
        let [n] = lines[line].trim().split(' ').map(Number)
        line++
        let arr = lines[line].trim().split(' ').map(Number)
        line++
        
        console.log(rec(arr, 0, {}))
    }
    
}

function rec(arr, cur, vis) {
    if (cur > arr.length || cur < 0) {
        return 10000000008
    }
    
    if (cur == arr.length) {
        return 0
    }
    
    if (cur in vis && vis[cur] == 1) {
        return 10000000008
    }
    
    vis[cur] = 1
    let ans = 1 + Math.min(rec(arr, cur + 1, vis), rec(arr, cur + arr[cur], vis))
    vis[cur] = 0
    return ans
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