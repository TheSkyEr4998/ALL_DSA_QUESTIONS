function doit(input) {
    let lines = input.split('\n')
    let n = parseInt(lines[0])
    let start = lines[1].trim().split(' ');
    let end = lines[2].trim().split(' ');
    
    let s_int = []
    for (let i = 0;i < n;i++) {
        let [hour, min] = start[i].split(':').map(Number)
        s_int.push((hour * 60) + min)
    }
    
    let e_int = []
    for (let i = 0;i < n;i++) {
        let [hour, min] = end[i].split(':').map(Number)
        e_int.push((hour * 60) + min)
    }
    
    let arr = []
    for (let i = 0;i <= 1500;i++) {
        arr.push(0)
    }
    
    let se = []
    for (let i = 0;i < n;i++) {
        arr[s_int[i]]++
        arr[e_int[i]]--
    }
    
    let ans = 1
    
    for (let i = 1;i <= 1500;i++) {
        arr[i] += arr[i - 1]
        ans = Math.max(ans, arr[i])
    }
    
    console.log(ans)
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