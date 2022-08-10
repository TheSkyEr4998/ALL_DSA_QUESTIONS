function count_it(curi, curj, cur_step, n) {
    if (cur_step > n) {
        return []
    }
    
    if (curi < 1 || curj < 1 || curi > 10 || curj > 10) {
        return []
    }
    
    if (cur_step == n) {
        return [[curi, curj]]
    }
    
    var ans = []
    
    ans = ans.concat(count_it(curi + 1, curj + 2, cur_step + 1, n))
    ans = ans.concat(count_it(curi + 1, curj - 2, cur_step + 1, n))
    ans = ans.concat(count_it(curi - 1, curj + 2, cur_step + 1, n))
    ans = ans.concat(count_it(curi - 1, curj - 2, cur_step + 1, n))
    ans = ans.concat(count_it(curi + 2, curj + 1, cur_step + 1, n))
    ans = ans.concat(count_it(curi + 2, curj - 1, cur_step + 1, n))
    ans = ans.concat(count_it(curi - 2, curj + 1, cur_step + 1, n))
    ans = ans.concat(count_it(curi - 2, curj - 1, cur_step + 1, n))
    
    return ans
}

function doit(input) {
    var [i, j, n] = input.split(' ').map(Number)
    
    var ans = count_it(i, j, 0, n)
    
    var ma = {}
    var fin_ans = 0
    
    for (var i = 0;i < ans.length;i++) {
        if (!(ans[i] in ma)) {
            fin_ans++
            ma[ans[i]] = 1
        }
    }
    
    console.log(fin_ans)
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
