class Queue {
    
    constructor() {
        this.q = new Array(105)
        this.f = 0
        this.r = 0
    }
    
    is_empty() {
         return this.f == this.r
    }
    
    get_front() {
        if(this.f == this.r){
            return '-1'
        }
        return this.q[this.f]
    }
    
    eq(num) {
        this.q[this.r] = num
        this.r++
    }
    
    dq() {
        if (this.f == this.r) {
            return -1
        }
        var temp = this.q[this.f]
        this.f++
        if(this.f == this.r) {
            this.f = 0
            this.r = 0
        }
        return temp
    }
    
    len() {
        return this.r - this.f
    }
}
 
function doit(input) {
    let lines = input.split('\n')
    let t = parseInt(lines[0])
    
    let qu = new Queue()
    
    for (let i = 1;i <= t;i++) {
        if (lines[i][0] == 'E') {
            var [o, x] = lines[i].trim().split(' ')
            qu.eq(x)
            console.log(qu.len())
        } else {
            console.log(qu.dq() + " " + qu.len())
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