function sum_of_digits(s) {
    var sum = 0
    
    for(var i = 0;i < s.length;i++) {
        sum += parseInt(s[i])
    }
    
    return sum + ""
}

function number_of_digits(s) {
    var ct = 0
    
    var ma = {}
    
    for(var i = 0;i < s.length;i++) {
        if (!(s[i] in ma)) {
            ct ++
            ma[s[i]] = 1
        }
    }
    
    return ct
}

function super_digit(p) {
    if (number_of_digits(p) == 1) {
        return p[0]
    }
    
    return super_digit(sum_of_digits(p))
}

function doit(input) {
    var [n, ks] = input.split(' ')
    
    var k = parseInt(ks)
    
    if (number_of_digits(n) == 1) {
        console.log(n[0])
    } else {
        console.log(super_digit((sum_of_digits(n) * k) + ""))
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