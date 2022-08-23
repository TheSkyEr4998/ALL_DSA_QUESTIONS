let all_perm = []

function all_permutations(arr, i, cur_arr) {
    if (i >= arr.length) {
        all_perm.push(cur_arr.join(' '))
        return
    }
    
    for (let j = 0;j < arr.length;j++) {
        if (!cur_arr.includes(arr[j])) {
            cur_arr.push(arr[j])
            all_permutations(arr, i + 1, cur_arr)
            cur_arr.pop()
        }
    }
}

function doit(input) {
    let lines = input.split('\n')
    
    let n = parseInt(lines[0])
    let arr = lines[1].trim().split(' ').map(Number)
    
    all_permutations(arr, 0, [])
    
    for (let i = 0;i < all_perm.length;i++) {
        console.log(all_perm[i])
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