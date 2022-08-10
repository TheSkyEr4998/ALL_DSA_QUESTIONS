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
    
	var ans = 0;
	for (let i = 0; i < 1500; i++) {
		var cnt = 0;
		for (let j = 0; j < n; j++) {
			if (i >= s_int[j] && i < e_int[j]) {
				cnt++;
			}
		}
		ans = Math.max(ans, cnt);
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