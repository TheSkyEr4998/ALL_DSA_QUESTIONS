function sort_data_selection_sort(names, marks, n) {
    for (var i = 0;i < n - 1;i++) {
        max = i
        for(var j = i + 1;j < n;j++) {
            if (marks[j] > marks[max]) {
                max = j
            } else if (marks[j] == marks[max] && names[j] < names[max]) {
                max = j
            }
        }
        
        var temp = names[i]
        names[i] = names[max]
        names[max] = temp
        
        temp = marks[i]
        marks[i] = marks[max]
        marks[max] = temp
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
    
    sort_data_selection_sort(names, marks, n)
    
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