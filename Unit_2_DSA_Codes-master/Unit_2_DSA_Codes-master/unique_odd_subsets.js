function is_subset_possible(arr, k, i, cur_arr) {
    if (i >= arr.length) {
        
        let ma = {}
        let unique_numbers = 0
        let sum = 0
        
        for (let i = 0;i < cur_arr.length;i++) {
            sum += cur_arr[i]
            
            if (!(cur_arr[i] in ma)) {
                unique_numbers++
                ma[cur_arr[i]] = 1
            }
        }
        
        return sum % 2 == 1 && unique_numbers == k
    }
    
    return is_subset_possible(arr, k, i + 1, [...cur_arr, arr[i]]) || is_subset_possible(arr, k, i + 1, cur_arr)
}

function doit(input) {
    
    let lines = input.split('\n')
    
    let n = parseInt(lines[0])
    let arr = lines[1].trim().split(' ').map(Number)
    let k = parseInt(lines[2])
    
    console.log(is_subset_possible(arr, k, 0, []) ? "True" : "False")
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