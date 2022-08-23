/*Description

Given a square matrix, you have to find the reverse U traversal of the matrix. Refer the sample I/O for better understanding. Refer the given figure for better understanding.

Note: No element should be visited more than once.

Image


Input
The first line of the input contains T, the number of test cases.

The next line contains N, the size of the square matrix.

The next N lines contains N space separated integers each denoting the values of the matrix.

Constraints

1 <= T <= 10

1 <= N <= 50

1 <= A[i][j] <= 50


Output
For each test case, print the elements that lie on the reverse U traversal, on a single line, on a new line.


Sample Input 1 

1
3
1 2 3
4 5 6
7 8 9
Sample Output 1

7 4 1 2 3 6 9 8 
Hint

The elements that lie on the circular traversal of the given matrix are - 7,4,1,2,3,6,9,8*/
import java.util.Scanner;
public class Main {
    public static void main(String[] args){
        Scanner sc = new Scanner(System.in);
        int t = sc.nextInt();
        while(t-->0){
            int N = sc.nextInt();
            int arr[][] = new int[N][N];
            for (int i = 0; i <N; i++) {
                for (int j = 0; j < N; j++) {
                    arr[i][j] = sc.nextInt();
                  }
               }
            if (N==1) {
                    System.out.print(arr[0][0]);
                }else{
                for (int i = arr.length-1 , j=0; i>=1;i--){
                    System.out.print(arr[i][j] + " ");
                   }
               for(int i= 0,j=0;j<arr.length-1;j++){
                    System.out.print(arr[i][j] + " ");
                }
                for(int i=0,j=arr.length-1;i<arr.length-1;i++){
                    System.out.print(arr[i][j]+" ");
                }
                for(int i=arr.length-1,j=arr.length-1;j>=1;j--){
                    System.out.print(arr[i][j]+" ");
                  }
                }      
           System.out.println();
        }
    }
}
