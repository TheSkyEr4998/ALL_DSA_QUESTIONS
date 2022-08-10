function doit(input) {
    let lines = input.split('\n')
    let t = parseInt(lines[0])
    let line = 1
    
    while (t --) {
        let n = parseInt(lines[line])
        line++
        
        /*
        state - number_of_problems_solved
        
        number_of_problems_solved -> + 10
                                  -> + 12
                                  
        base case - 
        number_of_problems_solved == n -> 0 (you don't need any more pages)
        number_of_problems_solved > n -> infinity (not possible to NOT waste space)
        */  
        
        let ans = rec(n, 0, {})
        
        if (ans > 113) {
            console.log(-1)
        } else {
            console.log(ans)
        }
    }
}

function rec(n, number_of_problems_solved, dp) {
    if (number_of_problems_solved == n) {
        return 0
    }
    
    if (number_of_problems_solved > n) {
        return 100000000089
    }
    
    if (number_of_problems_solved in dp) {
        return dp[number_of_problems_solved]
    }
    
    let ans = 1 + Math.min(rec(n, number_of_problems_solved + 10, dp), rec(n, number_of_problems_solved + 12, dp))
    dp[number_of_problems_solved] = ans
    
    return ans
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