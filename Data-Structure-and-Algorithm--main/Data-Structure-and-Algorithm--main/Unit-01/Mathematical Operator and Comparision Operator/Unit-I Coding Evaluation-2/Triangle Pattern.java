/*
Description

You are given a number stored in a variable with the nameN

Print the pattern as shown below, according to the value stored inN

For example, consider the value stored inN = 5

Then, the required pattern will be as follows,

1
2 2
3 3 3
4 4 4 4
5 5 5 5 5

Input
The first and the only line of the input contains the valueN


Output
Print the pattern as shown in the problem statement


Sample Input 1 

4
Sample Output 1

1
2 2
3 3 3
4 4 4 4
Hint

In the sample test case, the value stored inN = 4. Therefore, the required pattern will be as shown below

1
2 2
3 3 3
4 4 4 4*/
public static void trianglePattern(int n){
    //write your code here
    for (int i= 1 ; i<=n ; i++){
    for (int j= 1 ; j<=i ; j++){
    System.out.print(i+" ");}
    System.out.println();
  }
}
