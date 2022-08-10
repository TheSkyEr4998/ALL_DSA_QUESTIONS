let glb = -1

function lb_rec(arr, l, r, k, glb) {
    if (l > r) {
        return
    }

    let mid = l + parseInt((r - l) / 2)
    if (arr[mid] >= k) {
        if (arr[mid] == k) {
            glb = mid
        }
        lb_rec(arr, l, mid - 1, k, glb)
    } else {
        lb_rec(arr, mid + 1, r, k, glb)
    }
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
function doit(input) {
    input=input.trim().split("\n")
    let [N,K]=input[0].trim().split(" ").map(Number)
    let array=input[1].trim().split(" ").map(Number)
    console.log(lower_bound(array,K))
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