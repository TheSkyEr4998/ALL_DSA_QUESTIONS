function partition(arr, l, r) {
    let pivot = arr[r]
    let i = l
    for (let j = l;j <= r;j++) {
        if (arr[j] < pivot) {
            let temp = arr[j]
            arr[j] = arr[i]
            arr[i] = temp
            i ++
        }
    }
    let temp = arr[i]
    arr[i] = arr[r]
    arr[r] = temp
    return i
}
function quick_sort(arr, l, r) {
    if (l < r) {
        let pivot_pos = partition(arr, l, r)
        quick_sort(arr, l, pivot_pos - 1)
        quick_sort(arr, pivot_pos + 1, r)
    }
}
function runProgram(input) {
    // Write input assigning code here
    input = input.trim().split('\n')
    let N = +input[0]
    let array=input[1].trim().split(' ').map(Number)
    quick_sort(array, 0, array.length - 1)
    console.log(array.join(' '))
  }
    
  if (process.env.USER === "") {
  runProgram(`5
  3 5 0 9 8`);
  } else {
  process.stdin.resume();
  process.stdin.setEncoding("ascii");
  let read = "";
  process.stdin.on("data", function (input) {
    read += input;
  });
  process.stdin.on("end", function () {
    read = read.replace(/\n$/, "");
    read = read.replace(/\n$/, "");
    runProgram(read);
  });
  process.on("SIGINT", function () {
    read = read.replace(/\n$/, "");
    runProgram(read);
    process.exit(0);
  });
  }
