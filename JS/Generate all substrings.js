/*Description

You are given a string A of size N. Print all the non empty substrings of the string.

Note: You have to print the strings in an order such that all the substrings, starting with the first character are printed first, then all the substrings starting with the second character are printed, and so on. Refer the sample I/O for better understanding.

Note: The string contains only lowercase letters.


Input
The first line of the input contains T, the number of test cases.

The first line of each test case, contains N, the length of the string.

The next line contains the string itself.

Constraints

1 <= T <= 10

1 <= N <= 30


Output
For each test case, print all the substrings of the given string, in the order given in the sample test case.


Sample Input 1 

1
4 
aman
Sample Output 1

a 
am 
ama 
aman 
m 
ma 
man 
a 
an 
n*/
function generateALlSubstr(N,A){
  for(let i=0; i<N; i++){
    for(let j=i; j<N; j++){
    let str = "";
   for(let k=i; k<=j; k++){ 
    str = str + A[k];
            }
      console.log(str);
       }
    }
}
