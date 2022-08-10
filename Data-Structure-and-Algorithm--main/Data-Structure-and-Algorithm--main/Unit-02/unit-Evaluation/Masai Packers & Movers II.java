/*Description

You are excited about your new job and want to move to Bangalore, as soon as possible. You have to transport K units of weight of your stuff to Bangalore, therefore, you hired Masai Packers & Movers to do the job for you. The company has N trucks, each with a certain capacity C. Because of surge in fuel prices, the company has made a new policy that the trucks will be allowed to travelled, only if the truck is completely filled and has no empty spaces. Also, because of some issues, the company has only one driver. Therefore, in one day only a single truck can be used, to transport the things to Bangalore. Print the minimum and the maximum number of days, it will take to transport everything to Bangalore. If it is impossible to transport everything to Bangalore, print -1.


Input
The first line contains K and N, the total weight that needs to be transported, and N the number of trucks available.

Next line contains N space separated integers, denoting the capacity of each truck.

Constraints

1 <= K <= 40

1 <= N <= 7

1 <= C <= 10


Output
Print a single line containing two integers denoting the minimum and the maximum number of days it will take, to transport all the weight to Bangalore. If, it is impossible, print -1.


Sample Input 1 

3 3
1 2 3
Sample Output 1

1 3
Sample Input 2 

39 3
8 10 2
Sample Output 2

-1
Hint

The total number of ways in which the boxes can be delivered is 4, given as, (1,1,1),(2,1),(1,2),(3). The maximum number of repetitions required will be  3 and the minimum would be 1. Therefore, the answer is 1 3

In the second test case, there is no way, in which the entire weight can be transported, therefore, the output is -1.*/
import java.util.*;
import java.lang.*;
import java.io.*;

class Main{
    static int max = 0;
    static int min = Integer.MAX_VALUE;
    public static void solve ( int n , int k , int[]arr, int cur, int steps){
        if( cur > k) return ; 
        if ( cur == k){
            max = Math.max( max,steps);
            min = Math.min(min,steps);
            return ; 
        }
        for ( int i = 0; i<n ; i++){
            solve (n,k,arr,cur + arr[i],steps+1);
        }
    }
    public static void main ( String [] args){
        Scanner sc = new Scanner(System.in);
        int k = sc.nextInt();
        int n = sc.nextInt();
        int [] arr = new int [n];
        for ( int i = 0; i<arr.length; i++) arr[i] = sc.nextInt();
        solve ( n,k,arr,0,0);
        if ( max == 0) System.out.println(-1);
        else{
             System.out.println(min + " " + max);
        }
      }
        
    }



// function runProgram(input){
//     input = input.trim().split("\n");
//     var array = input[0].trim().split(" ").map(Number);
//     var arr = input[1].trim().split(" ").map(Number);
//     var t = +array[0];
//     var n = +array[1];
//      way(arr, n, t,0);
//      arrT.sort((a,b) => (a-b));
//      if(arrT.length > 0){
//       console.log(arrT[0], arrT[arrT.length-1]);}
//     else{
//       console.log("-1");}}
// var arrT = [];
// function way(arr, n, t,curr){
//   if (t < 0) {
//     return;
//   }
//     if(t === 0){
//       arrT.push(curr);
//       curr = 0;
//         return;
//     }
//      for(var i=0;i<arr.length;i++){
//     way(arr,n, t - arr[i],curr+1);}}
// if (process.env.USER === "Talib") {
//     runProgram(``);
// } else {
//     process.stdin.resume();
//     process.stdin.setEncoding("ascii");
//     let read = "";
//     process.stdin.on("data", function (input) {
//         read += input;
//     });
//     process.stdin.on("end", function () {
//         read = read.replace(/\n$/, "");
//         read = read.replace(/\n$/, "");
//         runProgram(read);
//     });
//     process.on("SIGINT", function () {
//         read = read.replace(/\n$/, "");
//         runProgram(read);
//         process.exit(0);
//     });
// }

