function doit(arr, n) {
    var g = []
    for (var i = 0;i < n;i ++) {
        var ans = -1
        for (var j = i - 1;j >= 0;j--) {
            if (arr[j] < arr[i]) {
                ans = arr[j]
                break
            }
        }
        g.push(ans)
    }

    console.log(g.join(' '))
}