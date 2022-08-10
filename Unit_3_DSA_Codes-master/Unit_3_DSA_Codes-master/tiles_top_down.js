function doit(input) {
    let lines = input.split('\n')
    let t = parseInt(lines[0])
    let line = 1
    
    while (t --) {
        let [h, w] = lines[line].trim().split(' ').map(Number)
        line++
        let arr = []
        for (let i = 0;i< h;i++) {
            let row = lines[line].trim().split(' ').map(Number)
            line++
            
            arr.push(row)
        }
        
        let ans = 0
        for (let i = 0;i < w;i++) {
            ans = Math.max(ans, rec(arr, 0, i, {}))
        }
        console.log(ans)
    }
}

function rec(arr, cur_r, cur_c, dp) {
    if (cur_r >= arr.length) {
        return 0
    }
    
    if (cur_c < 0 || cur_c >= arr[0].length) {
        return 0
    }
    
    if ([cur_r, cur_c] in dp) {
        return dp[[cur_r, cur_c]]
    }
    
    let ans = arr[cur_r][cur_c]
    
    ans += Math.max(
            rec(arr, cur_r + 1, cur_c, dp),
            Math.max(
                rec(arr, cur_r + 1, cur_c + 1, dp),
                rec(arr, cur_r + 1, cur_c - 1, dp)))
                
    dp[[cur_r, cur_c]] = ans
    
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