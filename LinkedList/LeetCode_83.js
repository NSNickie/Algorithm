/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
    let start = new ListNode()
    let res = start
    start.next = head
    let table = {}
    while (start && start.next) {
        if (!table[start.next.val]) {
            table[start.next.val] = true
            start = start.next
        } else {
            start.next = start.next.next
        }
    }
    return res.next
};