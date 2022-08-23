function doit(input) {
    let lines = input.split('\n')
    let n = parseInt(lines[0])
    let line = 1
    let arr = lines[line].trim().split(' ')
    line++
    let q = parseInt(lines[line])
    line++
    
    let vovels = ['a', 'e', 'i', 'o', 'u']
    
    let pref = []
    let ct = 0
    pref.push(ct)
    
    for (let i = 0;i < arr.length;i++) {
        let is_strong =
            vovels.includes(arr[i][0])
            && vovels.includes(arr[i][arr[i].length - 1])
            
        if (is_strong) {
            ct += 1
        }
        
        pref.push(ct)
    }
    
    while(q--) {
        let [l, r] = lines[line].trim().split(' ').map(Number)
        line++
        console.log((pref[r] - pref[l - 1]))
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