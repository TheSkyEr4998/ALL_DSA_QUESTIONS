function schedule_intervals(n, start, end) {
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
    
    let se = []
    for (let i = 0;i < n;i++) {
        se.push([s_int[i], e_int[i]])
    }
    
    se.sort((a, b) => {
        if (a[0] == b[0]) {
            return a[1] - b[1]
        }
        return a[0] - b[0]
    })
    
    console.log(ans)
}