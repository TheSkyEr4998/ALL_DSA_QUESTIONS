/*Description

Piyush goes to buy soap from a shop.The shop contains N soaps. The prices of soap are given in the form of an array A. The price of ith soap is A[i]. Now Piyush has q queries, in each query he wants to know the number of soaps that have price less than the given amount M.


Input
Input Format :

First line contains integer N total number of soaps available in the shop.

Second line contains N space separated integers.

Third line contains Q number of queries.

Each of the next Q lines contain integer M.

Constraints :

1 ≤ N ≤ 100000

1 ≤ A[i] ≤ 1000000000

1 ≤ Q ≤ 100000

1 ≤ M ≤ 100000


Output
For each query output number of soaps having price less than M for that query.


Sample Input 1 

5
1 4 10 5 6
4
2
3
5
11
Sample Output 1

1
1
2
5*/
import java.util.*;
class Main{
    public static void main(String [] args){
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int [] arr = new int[n];
        for ( int i = 0; i<n; i++) arr[i] = sc.nextInt();
        Arrays.sort(arr);
        int z = sc.nextInt();
        while(z --!=0){
            int m = sc.nextInt();
            int count = -1;
            int left = 0;
            int right = n-1;
            while( left<= right){
                int mid = left+(right-left)/2;
                if(arr[mid]<m){
                    count = mid;
                    left = mid+1;
                }else{
                    right = mid-1;
                }
            }
            System.out.println(count+1);
        }
    }
}
