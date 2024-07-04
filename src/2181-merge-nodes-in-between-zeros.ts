/**
 * Definition for singly-linked list. **/
class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}


function mergeNodes(head: ListNode | null): ListNode | null {

    if(head==null) return null;

    let result = new ListNode(head.val);
    let resultHead = result;
    for (let currentNode = head.next; currentNode != null; currentNode = currentNode.next) {
        if (currentNode.val == 0 && currentNode.next != null) {
            resultHead.next = new ListNode(0);
            resultHead = resultHead.next
        } else {
            resultHead.val += currentNode.val
        }
    }
    return result;
};