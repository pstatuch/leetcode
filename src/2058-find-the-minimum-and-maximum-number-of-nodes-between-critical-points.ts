
// Definition for singly - linked list.
class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}


function nodesBetweenCriticalPoints(head: ListNode | null): number[] {
    if (head == null || head.next == null) {
        return [-1, -1];
    }
    let prevNode = head!;
    let lastCriticalPoint = -1;
    let firstCriticalPoint = -1;
    let minCriticalGap = -1;
    let index = 1;

    for (
        let currentNode = head.next;
        currentNode.next != null;
        prevNode = currentNode, currentNode = currentNode.next, index++) {

        let { val } = currentNode;
        if ((prevNode.val! < val && currentNode.next.val < val) ||
            (prevNode.val! > val && currentNode.next.val > val)
        ) {
            // anomally
            if (firstCriticalPoint == -1) {
                firstCriticalPoint = index;
            }
            //
            if (lastCriticalPoint > 0 && ( index - lastCriticalPoint < minCriticalGap || minCriticalGap <0) ) {
                minCriticalGap = index - lastCriticalPoint;
            }
            lastCriticalPoint = index;
        }
    }
    return [minCriticalGap, lastCriticalPoint != firstCriticalPoint ?lastCriticalPoint- firstCriticalPoint: -1];
};

let input = new ListNode(5,
    new ListNode(3, 
        new ListNode(1, 
            new ListNode(2, 
                new ListNode(5, 
                    new ListNode(1, 
                        new ListNode(2)
                    )
                )
            )
        )
    )
)
console.log(
nodesBetweenCriticalPoints(input)
)