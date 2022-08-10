/*Description

A number is given represented in the form of a linked list. Add one to it.


Input
This is a function complete problem. You don't have to take the input just complete the function given.

The sample test case is given only for your understanding.


Output
Return head of linked list which is the new number after incrementing one.


Sample Input 1 

4
2 3 1 3
Sample Output 1

2314
Hint

In the sample test case, the number represented by the linked list is 2->3->1->3 is 2313. After adding one the number becomes 2314, as given in the output.*/
/*
class Node{
	int data;
	Node next;

	Node(int data){
		this.data = data;
		this.next = null;
	}
}
*/
class Solution{
  public Node addOneToLinkedList(Node head){ 
    
      head = reverse (head) ; 
     
      head  = addOneUtil(head);
   
      return reverse(head); 
      } 
  static Node reverse(Node head){ 
      Node prev = null; 
      Node current = head; 
      Node next = null; 
      while (current != null){ 
        next = current.next; 
        current.next = prev; 
        prev = current; 
        current = next; 
      } 
      return prev; 
  }
     static Node addOneUtil (Node head){ 
   
    Node res = head; 
    Node temp = null, prev = null; 
    int carry = 1, sum; 
    while (head != null) 
    { 
    
    sum = carry + head.data; 
   
    carry = (sum >= 10) ? 1 : 0; 
   
    sum = sum % 10; 
  
    head.data = sum; 
    
    temp = head; 
    head = head.next; 
      } 
    
    if (carry > 0) 
    temp.next = newNode(carry); 
   
    return res ; 
     } 
     static Node newNode(int data){
         
     Node new_node = new Node(data); 
     new_node.data = data; 
     new_node.next = null; 
     return new_node; 
        }
     }

