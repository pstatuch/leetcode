/**
 * Definition for singly-linked list.
 */
{
class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}


function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    const result = new ListNode();
    let resultHead = result
    let overload: 0 | 1 = 0;
    while (l1 || l2) {
        let value :number = (l1?.val ?? 0) + (l2?.val ?? 0) + overload;

        overload = value > 9 ? 1 : 0;
        resultHead = resultHead.next = new ListNode(value % 10);
        l1 = l1?.next ?? null
        l2 = l2?.next ?? null
    }
    if (overload > 0) resultHead.next = new ListNode(overload);
    return result.next;
};

}