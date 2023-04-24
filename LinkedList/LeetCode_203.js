/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {
    // Necessary to new a pre-node here, because we can't avoid 
    // judging the first node.
    let start = new ListNode()
    start.next = head
    let res = start
    // for every NEXT node, we judge if the node and its next
    // is exist.
    while (start && start.next) {
        if (start.next.val === val) {
            start.next = start.next.next
        } else {
            // only if the val not equal with the parameter, then move
            // on the node. 
            start = start.next
        }
    }
    return res.next

};
