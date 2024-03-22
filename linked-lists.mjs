export function Node (initValue = null, initKey = null) {
    let key = initKey;
    let value = initValue;
    let next = null;
    return {key, value, next};
};

export function LinkedList (value = null) {
    let headNode = null;
    let tailNode = null;

    if (value != null) {
        headNode = Node(initValue = value);
        tailNode = Node(initValue = value);
    }

    const head = () => {
        return headNode;
    };

    const tail = () => {
        return tailNode;
    };

    const append = (value) => {
        let newNode = Node(initValue = value);
        if (headNode == null && tailNode == null) {
            headNode = newNode;
            tailNode = newNode;
        } else {
            tailNode.next = newNode;
            tailNode = newNode;
        }
    };

    const prepend = (value) => {
        let newNode = Node(initValue = value);
        if (headNode == null && tailNode == null) {
            headNode = newNode;
            tailNode = newNode;
        } else {
            newNode.next = headNode;
            headNode = newNode;
        }
    };

    const size = () => {
        let iterNode = headNode;
        let count = 1;
        while (iterNode.next != null) {
            count++;
            iterNode = iterNode.next;
        }
        return count;
    };

    const at = (index) => {
        let iterNode = headNode;
        let count = 0;
        while (count !== index) {
            count++;
            iterNode = iterNode.next;
        }
        return iterNode;
    };

    const pop = () => {
        if (headNode == null && tailNode == null) {
            console.log('no node to pop');
            return;
        } else if (headNode == tailNode) {
            headNode = null;
            tailNode = null;
        } else {
            let prevNode;
            let iterNode = headNode;
            while (iterNode.next != null) {
                prevNode = iterNode;
                iterNode = iterNode.next;
            }
            prevNode.next = null;
            tailNode = prevNode;
        }
    };

    const contains = (value) => {
        let isValuePresent = false;
        if (headNode == null && tailNode == null) {
            console.log('no nodes');
            return isValuePresent;
        } else {
            let iterNode = headNode;
            while (iterNode != null) {
                if (iterNode.value == value) {
                    isValuePresent = true;
                    return isValuePresent;
                }
                iterNode = iterNode.next;
            }
            return isValuePresent;
        }
    };

    const find = (value) => {
        let foundIndex = null;
        let count = 0;
        if (headNode == null && tailNode == null) {
            console.log('no nodes to find');
            return foundIndex;
        } else {
            let iterNode = headNode;
            while (iterNode != null) {
                if (iterNode.value == value) {
                    foundIndex = count;
                    return foundIndex;
                }
                count++;
                iterNode = iterNode.next;
            }
            return foundIndex;
        }
    };

    const toString = () => {
        let s = '';
        if (headNode == null && tailNode == null) {
            s += 'null';
            return s;
        } else {
            let iterNode = headNode;
            while (iterNode != null) {
                s += `( ${iterNode.value} ) -> `;
                iterNode = iterNode.next;
            }
            s += 'null';
        }
        return s;
    };

    const insertAt = (value, index) => {
        if (index == 0) {
            prepend(value);
            return;
        } else if (index >= size() - 1) {
            append(value);
            return;
        } else {
            let newNode = Node(initValue = value);
            let prevNode = at(index - 1);
            let nextNode = at(index);
            prevNode.next = newNode;
            newNode.next = nextNode;
            return;
        }
    };

    const removeAt = (index) => {
        if (index == 0) {
            headNode = headNode.next;
        } else if (index >= size() - 1) {
            pop();
        } else {
            let prevNode = at(index - 1);
            let nextNode = at(index + 1);

            prevNode.next = nextNode;
        }
    };

    return {
        head,
        tail,
        append,
        prepend,
        size,
        at,
        pop,
        contains,
        find,
        toString,
        insertAt,
        removeAt,
    };

};
