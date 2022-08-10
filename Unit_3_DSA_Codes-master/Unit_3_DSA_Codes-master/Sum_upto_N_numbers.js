function addall(cur){
    if (cur===1){return 1}
    if(cur===0){return 0}
    var temp_sum=cur + addall(cur-1)
    return temp_sum
}
console.log(addall(10))