function freq(arr, k) {
    let lb = lower_bound(arr, k)
    let ub = upper_bound(arr, k)
    
    if (lb == -1) {
        console.log(0)
    } else {
        console.log(ub - lb + 1)
    }
}

function upper_bound(arr, k) {
    let l = 0
    let r = arr.length - 1
    let ub = -1

    while (l <= r) {
        let mid = l + parseInt((r - l) / 2)

        if (arr[mid] > k) {
            r = mid - 1
        } else {
            if (arr[mid] == k) {
                ub = mid
            }            
            l = mid + 1
        }
    }

    return ub
}

function lower_bound(arr, k) {
    let l = 0
    let r = arr.length - 1
    let lb = -1

    while (l <= r) {
        let mid = l + parseInt((r - l) / 2)

        if (arr[mid] >= k) {
            if (arr[mid] == k) {
                lb = mid
            }
            r = mid - 1
        } else {
            l = mid + 1
        }
    }

    return lb
}