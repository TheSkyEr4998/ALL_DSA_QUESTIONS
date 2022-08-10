function check_it(arr, n) {
    var stk = []
    
    var a_i = 0
    var next_number = 1
    
    while (a_i < n || stk.length > 0) {
        if (a_i < n && arr[a_i] == next_number) {
            a_i ++
            next_number ++
        } else if (stk.length > 0 && stk[stk.length - 1] == next_number) {
            stk.pop()
            next_number ++
        } else {
            if (a_i < n) {
                stk.push(arr[a_i])
                a_i ++
            } else {
                return "no"
            }
        }
    }
    
    if (next_number > n) {
        return "yes"
    } else {
        return "no"
    }
}

function doit(input) {
    var lines = input.trim().split('\n')
    var line = 0
    while(true) {
        var n = parseInt(lines[line])
        if (n == 0) {
            return
        }
        var arr = lines[line + 1].trim().split(' ').map(Number)
        
        line += 2
        
        console.log(check_it(arr, n))
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