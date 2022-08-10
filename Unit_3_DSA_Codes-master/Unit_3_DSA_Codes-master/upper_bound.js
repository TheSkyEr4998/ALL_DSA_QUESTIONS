function upper_bound(arr, k) {
    let l = 0
    let r = arr.length - 1
    let up = -1

    while (l <= r) {
        let mid = l + parseInt((r - l) / 2)

        if (arr[mid] <= k) {
            l = mid + 1
            up = mid
        } else {
            r = mid - 1
        }
    }

    return up + 1
}
function doit(input) {
    input=input.trim().split("\n")
    let [N,K]=input[0].trim().split(" ").map(Number)
    let array=input[1].trim().split(" ").map(Number)
    console.log(upper_bound(array,K))
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