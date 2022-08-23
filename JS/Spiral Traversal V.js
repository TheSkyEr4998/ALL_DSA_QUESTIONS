/*Description

You are given a square matrix of size N x N.

You have to print the spiral traversal of the matrix.

Refer the figure given below for better understanding.
Screenshot (114).png


Input
The first line of the input contains T, the number of test cases.

The first line of each test case contains N, the size of the matrix.

The next N lines contain N integers each denoting the values of the matrix.

Constraints

1 <= T <= 10

1 <= N <= 500

1 <= A[i][j] <= 500


Output
For each test case, print the spiral traversal of the matrix, as shown in the problem description, on a single line, on a new line.


Sample Input 1 

1
3
1 2 3
4 5 6
7 8 9
Sample Output 1

3 6 9 8 7 4 1 2 5 
Sample Input 2 

2
3
7 8 1
6 8 2
5 4 3
2
1 2
3 4
Sample Output 2

1 2 3 4 5 6 7 8 8 
2 4 3 1 
Hint

The spiral traversal for a given matrix is shown in the image in the problem description.*/

function spiralTraversalV(N, matrix){
    //write code here
  
var count = 0;
var top = 0;   //row_start
var bottom = N-1; //row_end
var left = 0;
var right = N-1;
var bag = "";
 var arr = matrix;
while(count < N*N){
for(var i = top; i <= bottom && count < N*N; i++){
  bag += arr[i][right] + " "; 
  count++;
}
right--; // r-2

for(i = right; i >= left && count < N*N ;i--){
  bag += arr[bottom][i] + " ";
  count++;
}
bottom--;

for(i = bottom; i >= top && count < N*N; i--){
  bag += arr[i][left] + " ";
  count++;
}
left++;
// 01 02
for(i = left; i <= right && count < N*N; i++){
  bag += arr[top][i] + " ";
  count++;
}
top++;
}
console.log(bag);
}
