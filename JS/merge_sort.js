function merge(left_half, right_half) {
    let merged_arr = []
    let lhi = 0
    let rhi = 0

    while (lhi < left_half.length && rhi < right_half.length) {
        if (left_half[lhi] < right_half[rhi]) {
            merged_arr.push(left_half[lhi])
            lhi++
        } else {
            merged_arr.push(right_half[rhi])
            rhi++
        }
    }

    while (lhi < left_half.length) {
        merged_arr.push(left_half[lhi])
        lhi++
    }

    while (rhi < right_half.length) {
        merged_arr.push(right_half[rhi])
        rhi++
    }

    return merged_arr
}

function merge_sort(arr) {
    if (arr.length <= 1) {
        return arr
    }

    let mid = parseInt(arr.length / 2)

    let left_half = merge_sort(arr.slice(0, mid))
    let right_half = merge_sort(arr.slice(mid))

    return merge(left_half, right_half)
}

console.log(merge_sort([5, 3, 1, 6, 4, 2, 8]).join(' '))