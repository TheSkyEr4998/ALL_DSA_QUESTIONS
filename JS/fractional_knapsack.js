function fractional_knapsack(n, weights, profits, capacity) {
    let combined = []

    for (let i = 0;i < n;i++) {
        combined.push([(profits[i] / weights[i]), i])
    }

    combined.sort((a, b) => b[0] - a[0])

    console.log(combined)

    let mx = 0
    let cur = 0
    let index_of_best_item = -1

    for (let i = 0;i < n;i++) {
        index_of_best_item = combined[i][1]
        if (cur + weights[index_of_best_item] <= capacity) {
            mx += profits[index_of_best_item]
            cur += weights[index_of_best_item]
            index_of_best_item = -1
        } else {
            break
        }
    }

    if (cur < capacity && index_of_best_item != -1) {
        let remaining_capacity = capacity - cur
        mx += (remaining_capacity / weights[index_of_best_item]) * profits[index_of_best_item];
    }

    return mx
}