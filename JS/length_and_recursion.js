function s_length(s) {
    if (s == "") {
        return 0
    }
    
    return 1 + s_length(s.slice(1))
}

function doit(input) {
    console.log(s_length(input))
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