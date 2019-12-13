const DoublyLinkedList = require('../doublyLinkedList');

describe('DoublyLinkedList', () => {
    it('should create empty linked list', () => {
        const linkedList = new DoublyLinkedList();
        expect(linkedList.head).toBeNull();
        expect(linkedList.tail).toBeNull();
    });

    it('should get first element of linked list', () => {
        const linkedList = new DoublyLinkedList();
        expect(linkedList.getFirst()).toBeNull();

        linkedList.addFirst(1);
        linkedList.addFirst(2);
        linkedList.addFirst(3);
        expect(linkedList.getFirst().value).toBe(3);
    });

    it('should get last element of linked list', () => {
        const linkedList = new DoublyLinkedList();
        expect(linkedList.getLast()).toBeNull();

        linkedList.addFirst(1);
        linkedList.addFirst(2);
        linkedList.addFirst(3);
        expect(linkedList.getLast().value).toBe(1);
    });

    it('should add Last node to linked list', () => {
        const linkedList = new DoublyLinkedList();

        expect(linkedList.head).toBeNull();
        expect(linkedList.tail).toBeNull();

        linkedList.addLast(1);
        linkedList.addLast(2);

        expect(linkedList.head.next.value).toBe(2);
        expect(linkedList.tail.previous.value).toBe(1);
    });

    it('should add First node to linked list', () => {
        const linkedList = new DoublyLinkedList();

        linkedList.addFirst(2);
        expect(linkedList.head.toString()).toBe('2');
        expect(linkedList.tail.toString()).toBe('2');

        linkedList.addLast(1);
        linkedList.addFirst(3);

        expect(linkedList.head.next.next.previous).toBe(linkedList.head.next);
        expect(linkedList.tail.previous.next).toBe(linkedList.tail);
        expect(linkedList.tail.previous.value).toBe(2);
    });


    it('should delete node by value from linked list', () => {
        const linkedList = new DoublyLinkedList();

        expect(linkedList.remove(5)).toBe(false);

        linkedList.addLast(1);
        linkedList.addLast(1);
        linkedList.addLast(2);
        linkedList.addLast(3);
        linkedList.addLast(3);
        linkedList.addLast(3);
        linkedList.addLast(4);
        linkedList.addLast(5);

        expect(linkedList.head.toString()).toBe('1');
        expect(linkedList.tail.toString()).toBe('5');

        const deletedNodeResponse = linkedList.remove(1);
        expect(deletedNodeResponse).toBe(true);
        expect(linkedList.getFirst().value).toBe(1);
        expect(linkedList.head.next.value).toBe(2);
        expect(linkedList.toArray()).toEqual([1, 2, 3, 3, 3, 4, 5]);


        expect(linkedList.remove(3)).toBe(true);
        expect(linkedList.getFirst().value).toBe(1);
        expect(linkedList.head.next.value).toBe(2);
        expect(linkedList.toArray()).toEqual([1, 2, 3, 3, 4, 5]);

    });

    it('should remove last node from linked list', () => {
        const linkedList = new DoublyLinkedList();

        expect(linkedList.removeLast()).toBeNull();

        linkedList.addLast(1);
        linkedList.addLast(2);
        linkedList.addLast(3);

        expect(linkedList.head.toString()).toBe('1');
        expect(linkedList.tail.toString()).toBe('3');

        const deletedNode1 = linkedList.removeLast();

        expect(deletedNode1.value).toBe(3);
        expect(linkedList.toArray()).toEqual([1, 2]);
        expect(linkedList.head.toString()).toBe('1');
        expect(linkedList.tail.toString()).toBe('2');

        const deletedNode2 = linkedList.removeLast();

        expect(deletedNode2.value).toBe(2);
        expect(linkedList.toArray()).toEqual([1]);
        expect(linkedList.head.toString()).toBe('1');
        expect(linkedList.tail.toString()).toBe('1');

        const deletedNode3 = linkedList.removeLast();

        expect(deletedNode3.value).toBe(1);
        expect(linkedList.toArray()).toEqual([]);
        expect(linkedList.head).toBeNull();
        expect(linkedList.tail).toBeNull();
    });

    it('should remove first node from linked list', () => {
        const linkedList = new DoublyLinkedList();

        expect(linkedList.removeFirst()).toBeNull();

        linkedList.addLast(1);
        linkedList.addLast(2);

        expect(linkedList.head.toString()).toBe('1');
        expect(linkedList.tail.toString()).toBe('2');

        const deletedNode1 = linkedList.removeFirst();

        expect(deletedNode1.value).toBe(1);
        expect(linkedList.head.previous).toBeNull();
        expect(linkedList.toArray()).toEqual([2]);
        expect(linkedList.head.toString()).toBe('2');
        expect(linkedList.tail.toString()).toBe('2');

        const deletedNode2 = linkedList.removeFirst();

        expect(deletedNode2.value).toBe(2);
        expect(linkedList.toArray()).toEqual([]);
        expect(linkedList.head).toBeNull();
        expect(linkedList.tail).toBeNull();
    });
});