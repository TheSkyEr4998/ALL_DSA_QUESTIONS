function is_subset_possible(arr, k, i, cur_arr) {
    if (i >= arr.length) {
        let are_all_same = true
        for (let i = 1;i < cur_arr.length;i++) {
            if (cur_arr[i] != cur_arr[0]) {
                are_all_same = false
                break
            }
        }
        
        return are_all_same && cur_arr.length >= k
    }

    let new_arr = []

    for (let i = 0;i < cur_arr.length;i++) {
        new_arr.push(cur_arr[i])
    }

    new_arr.push(arr[i])

    return is_subset_possible(arr, k, i + 1, new_arr)
            || is_subset_possible(arr, k, i + 1, cur_arr)
}

function doit(input) {
    
    let lines = input.split('\n')
    
    let n = parseInt(lines[0])
    let arr = lines[1].trim().split(' ').map(Number)
    let k = parseInt(lines[2])

    if (is_subset_possible(arr, k, 0, [])) {
       console.log("True") 
    } else {
        console.log("False")
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