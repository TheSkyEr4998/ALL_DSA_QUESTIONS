/*Description

Given an array A of n elements, every element appears twice in the array except for one element. Find the element that is uniquely present in the array.

In other words, there is one value that has a frequency of 1 whereas the rest has a frequency of 2. Find that particular element.

Added Constraint -> Do in O(1) auxiliary space and linear time complexity.


Input
The first line of the input contains one integer t (1 ≤ t ≤ 10) — the number of test cases. Then t test cases follow.

The first line of each test case contains a single integer n (1 ≤ n ≤ 100000) — the size of the array A.

The second line of each test case contains n integers (1 ≤ n ≤ 100000) - The elements of the array A.


Output
For each test case, print the answer: The unique element.


Sample Input 1 

2
1
5
5
1 2 1 3 2
Sample Output 1

5
3*/
import java.util.HashMap;
import java.util.Map;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        int test = scan.nextInt();
        while (test != 0) {
            int n = scan.nextInt();
            int[] arr = new int[n];
            for (int i = 0; i < n; i++) {
                arr[i] = scan.nextInt();
            }
            findUniqueOne(arr, n);
            test--;
        }
    }

    public static void findUniqueOne(int[] arr, int n) {

        HashMap<Integer, Integer> hashMap = new HashMap<>();
        for (int i = 0; i < n; i++) {
            if (hashMap.containsKey(arr[i])) {
                int count = hashMap.get(arr[i]);
                hashMap.put(arr[i], count + 1);
            } else {
                hashMap.put(arr[i], 1);
            }
        }
        int unique = 0;
        for (Map.Entry<Integer, Integer> map : hashMap.entrySet()) {
            if (map.getValue() == 1) {
                unique = map.getKey();

            }
        }
        System.out.println(unique);
    }
}

