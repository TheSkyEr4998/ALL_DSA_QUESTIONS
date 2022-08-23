function doit(input) {
    let lines = input.split('\n')
    let t = parseInt(lines[0])
    let line = 1
    
    while (t --) {
        let s1 = lines[line].trim()
        line++
        let s2 = lines[line].trim()
        line++
        
        let s1i = 0
        let s2i = 0
        
        while (s1i < s1.length && s2i < s2.length) {
            if (s1i >= s1.length) {
                break
            }
            if (s1[s1i] == s2[s2i]) {
                s1i++
                s2i++
            } else {
                s2i++
            }
        }
        
        if (s1i >= s1.length) {
            console.log("YES")
        } else {
            console.log("NO")
        }
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