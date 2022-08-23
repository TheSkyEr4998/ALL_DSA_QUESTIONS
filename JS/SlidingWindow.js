function check(arr,n,k){
    var output=[]
    var cur_sum=0
    for (let i=0;i<k;i++){
        cur_sum +=arr[i]
    }
    output.push(cur_sum)
    for(let i=k;i<n;i++){
        cur_sum -= arr[i-k]
        cur_sum +=arr[i]
        output.push(cur_sum)
    }
    console.log(output)
}
check([1,0,5,9,2,3,6,4,8,7],10,3)