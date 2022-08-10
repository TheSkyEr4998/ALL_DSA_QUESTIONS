function subs(s, cur) {
    if (s == "") {
        console.log(cur)
        return
    }

    let cur_l = s[0]

    cur = cur + cur_l
    subs(s.slice(1), cur)
    cur = cur.slice(0, cur.length - 1)
    subs(s.slice(1), cur)
}

function doit(input) {
    let lines = input.trim().split('\n')
    
    let n = parseInt(lines[0])
    let s = lines[1].trim()
    
    subs(s, "")
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