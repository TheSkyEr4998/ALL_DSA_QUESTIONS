function selec_Sort(arr,n){
    for (let i=0;i<n-1;i++){
        var min=i
        for(let j=i+1;j<n;j++){
            if(arr[min]>arr[j]){
                min=j
            }
        }
        let temp=arr[i]
        arr[i]=arr[min]
        arr[min]=temp
    }
    console.log(arr)
}
selec_Sort([3,6,9,8,5,2,1,4,7,0],10)