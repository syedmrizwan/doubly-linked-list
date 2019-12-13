const DoublyLinkedListNode = require('./doublyLinkedListNode');
class DoublyLinkedList {
    constructor() {
        /** @var DoublyLinkedListNode */
        this.head = null;

        /** @var DoublyLinkedListNode */
        this.tail = null;
    }

    /**
     * @return {DoublyLinkedListNode}
     */
    getFirst() {
        return this.head;
    }

    /**
     * @return {DoublyLinkedListNode}
     */
    getLast() {
        return this.tail;
    }
    /**
     * @param {*} value
     * @return {DoublyLinkedList}
     */
    addFirst(value) {
        // Make new node to be a head.
        const newNode = new DoublyLinkedListNode(value, this.head);

        // If head exist then make this(previous head) as PREVIOUS REFRENCE to the new node/head
        if (this.head) {
            this.head.previous = newNode;
        }
        this.head = newNode;

        // If no tail exist then make this node as tail
        if (!this.tail) {
            this.tail = newNode;
        }

        return this;
    }

    /**
     * @param {*} value
     * @return {DoublyLinkedList}
     */
    addLast(value) {
        const newNode = new DoublyLinkedListNode(value);

        // If no head exist then make this node as head
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;

            return this;
        }

        // Attach new node to the end of linked list.
        this.tail.next = newNode;

        // Make current tail to the new node's previous reference.
        newNode.previous = this.tail;

        // Set new node to be the tail of linked list.
        this.tail = newNode;

        return this;
    }

    /**
     * @return {DoublyLinkedListNode}
     */
    removeFirst() {
        // return null if no head exists
        if (!this.head) {
            return null;
        }

        const deletedHead = this.head;

        if (this.head.next) {
            this.head = this.head.next;
            this.head.previous = null;
        } else {
            this.head = null;
            this.tail = null;
        }

        return deletedHead;
    }

    /**
     * @return {DoublyLinkedListNode}
     */
    removeLast() {
        // return null if no tail exists
        if (!this.tail) {
            return null;
        }

        // if there is only one node in linked list.
        if (this.head === this.tail) {
            const deletedTail = this.tail;
            this.head = null;
            this.tail = null;

            return deletedTail;
        }

        // if there are many nodes in linked list...
        const deletedTail = this.tail;

        this.tail = this.tail.previous;
        this.tail.next = null;

        return deletedTail;
    }

    /**
     * @param {*} value
     * @return {Boolean}
     */
    remove(value) {
        if (!this.head) {
            return false;
        }

        let deletedNode = null;
        let currentNode = this.head;

        while (currentNode) {
            if (currentNode.value === value) {
                deletedNode = currentNode;

                if (deletedNode === this.head) {
                    // If HEAD is going to be deleted...
                    // Set head to second node, which will become new head.
                    this.head = deletedNode.next;

                    // Set new head's previous to null.
                    if (this.head) {
                        this.head.previous = null;
                    }
                    if (deletedNode === this.tail) {
                        this.tail = null;
                    }
                } else if (deletedNode === this.tail) {
                    // If TAIL is going to be deleted...
                    // Set tail to second last node, which will become new tail.
                    this.tail = deletedNode.previous;
                    this.tail.next = null;
                } else {
                    // If MIDDLE node is going to be deleted...
                    const previousNode = deletedNode.previous;
                    const nextNode = deletedNode.next;

                    previousNode.next = nextNode;
                    nextNode.previous = previousNode;
                }
                break;
            }

            currentNode = currentNode.next;
        }

        return deletedNode ? true : false;
    }

    /**
     * @return {DoublyLinkedListNode[]}
     */
    toArray() {
        const nodes = [];

        let currentNode = this.head;
        while (currentNode) {
            nodes.push(currentNode.value);
            currentNode = currentNode.next;
        }

        return nodes;
    }

}

module.exports = DoublyLinkedList;