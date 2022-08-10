function sort_based_on_names(names, marks, n) {
    for (var i = 0;i < n - 1;i++) {
        for(var j = 0;j<n-i-1;j++) {
            if (names[j] > names[j + 1]) {
                    var temp = names[j]
                    names[j] = names[j + 1]
                    names[j + 1] = temp
                    
                    temp = marks[j]
                    marks[j] = marks[j + 1]
                    marks[j + 1] = temp
                }
        }
    }
}

function sort_based_on_marks(names, marks, n) {
    for (var i = 0;i < n - 1;i++) {
        for(var j = 0;j<n-i-1;j++) {
            if (marks[j] < marks[j + 1]) {
                    var temp = names[j]
                    names[j] = names[j + 1]
                    names[j + 1] = temp
                    
                    temp = marks[j]
                    marks[j] = marks[j + 1]
                    marks[j + 1] = temp
                }
        }
    }
}

function doit(input) {
    var lines = input.trim().split('\n')
    var n = parseInt(lines[0])
    
    var marks = []
    var names = []
    
    for (var i = 1;i <= n;i++) {
        var [name, mark] = lines[i].trim().split(' ')
        marks.push(parseInt(mark))
        names.push(name)
    }
    
    sort_based_on_names(names, marks, n)
    sort_based_on_marks(names, marks, n)
    
    var rank = 1
    var actual_rank = 1
    
    console.log(1 + " " + names[0])
    actual_rank++
    
    for (var i = 1;i < n;i++) {
        if (marks[i] != marks[i - 1]) {
            rank = actual_rank
        }
        actual_rank++
        console.log(rank + " " + names[i])
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