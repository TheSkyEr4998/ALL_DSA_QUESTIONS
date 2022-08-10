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
            return -1
        }
        return this.q[this.f]
    }
    
    eq(roll_number) {
        this.q[this.r] = roll_number
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
    
    var q = parseInt(lines[0])
    
    var qs = [new Queue(), new Queue(), new Queue(), new Queue()]
    
    var teamq = new Queue()
    
    for (var i = 1;i <= q;i++) {
        var line = lines[i].split(' ')
        
        if (line[0] == 'E') {
            var a = line[1]
            var b = line[2]
            
            if (qs[a - 1].is_empty()) {
                teamq.eq(a)
            }
            
            qs[a - 1].eq(b)
        } else {
            
            var front_team = teamq.get_front()
            
            console.log(front_team + " " + qs[front_team - 1].dq())
            
            if (qs[front_team - 1].is_empty()) {
                teamq.dq()
            }
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