//TWO POINTER METHOD
function twoPointer(A,target){
    let arr=A.sort();
    console.log(arr)
    let start=0
    let end=arr.length-1
    while(start<end){
        if(arr[start]+arr[end]==target){
            console.log([start,end]) 
            break
        }
        else if(arr[start]+arr[end]<target){
            start++
        }
        else{
            end--
        }
    }
}
twoPointer([1,2,5,6,3,4,7],12)
// sorted array=> [1 2 3 4 5 6 7]