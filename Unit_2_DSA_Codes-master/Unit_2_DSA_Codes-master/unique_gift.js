class Queue {
    constructor() {
        this.q = new Array(50005)
        this.f = 0
        this.r = 0
    }
    
    is_empty() {
        return this.f == this.r
    }
    
    get_front() {
        if (this.f == this.r) {
            return '-'
        }
        return this.q[this.f]
    }
    
    eq(present) {
        this.q[this.r] = present
        this.r++
    }
    
    dq() {
        var temp = this.q[this.f]
        this.f++
        
        if (this.f == this.r) {
            this.f = 0
            this.r = 0
        }
        
        return temp
    }
}

function doit(input) {
    var lines = input.split('\n')
    
    var t = parseInt(lines[0])
    
    for(var i = 1;i <= t;i++) {
        var s = lines[i]
        
        var q = new Queue()
        var count = {}
        var ans = ""
        
        for (var j = 0;j < s.length;j++) {
            var ch = s[j]
            if (!(ch in count)) {
                count[ch] = 1}
            else {
                count[ch] ++}
            q.eq(ch)
            while (!q.is_empty()) {
                var f = q.get_front()
                if (count[f] == 1) {
                    break}
                q.dq()
            }
            if (q.is_empty()) {
                ans = ans + '#'
            } else {
                ans = ans + q.get_front()
            }
        }
        console.log(ans)
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