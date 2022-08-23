function count_it(curi, curj, cur_step, n, ma) {
    if (cur_step > n) {
        return 0
    }
    
    if (curi < 1 || curj < 1 || curi > 10 || curj > 10) {
        return 0
    }
    
    if (cur_step == n) {
        if (!([curi, curj] in ma)) {
            ma[[curi, curj]] = 1
            return 1
        }
        return 0
    }
    
    var ans = 0
    
    ans += count_it(curi + 1, curj + 2, cur_step + 1, n, ma)
    ans += count_it(curi + 1, curj - 2, cur_step + 1, n, ma)
    ans += count_it(curi - 1, curj + 2, cur_step + 1, n, ma)
    ans += count_it(curi - 1, curj - 2, cur_step + 1, n, ma)
    ans += count_it(curi + 2, curj + 1, cur_step + 1, n, ma)
    ans += count_it(curi + 2, curj - 1, cur_step + 1, n, ma)
    ans += count_it(curi - 2, curj + 1, cur_step + 1, n, ma)
    ans += count_it(curi - 2, curj - 1, cur_step + 1, n, ma)
    
    return ans
}

function doit(input) {
    var [i, j, n] = input.split(' ').map(Number)
    
    var ans = count_it(i, j, 0, n, {})
    
    console.log(ans)
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
