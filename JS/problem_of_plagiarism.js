let count = 0

function all_permutations(l, r, n, i, cur_arr) {
    if (i >= n) {
        let ct = 0
        for (let ii = l;ii <= r;ii++) {
            ct += cur_arr[ii]
        }
        
        if (ct % 2 == 1) {
            count ++
        }
        return
    }
    
    for (let j = 1;j <= n;j++) {
        if (!cur_arr.includes(j)) {
            cur_arr.push(j)
            all_permutations(l, r, n, i + 1, cur_arr)
            cur_arr.pop()
        }
    }
}

function doit(input) {
    let lines = input.split('\n')
    
    let n = parseInt(lines[0])
    let [l, r] = lines[1].trim().split(' ').map(Number)
    let arr = []
    for (let i = 1;i <= n;i++) {
        arr.push(i)
    }
    
    all_permutations(l, r, n, 0, [])
    
    console.log(count)
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