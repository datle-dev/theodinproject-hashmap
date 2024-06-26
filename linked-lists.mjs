export function Node (initValue = null, initKey = null) {
    let key = initKey;
    let value = initValue;
    let next = null;
    return {key, value, next};
};

export function LinkedList (value = null, key = null) {
    let headNode = null;
    let tailNode = null;

    if (value != null) {
        headNode = Node(value, key);
        tailNode = headNode;
    }

    const head = () => {
        return headNode;
    };

    const tail = () => {
        return tailNode;
    };

    const append = (value, key = null) => {
        let newNode = Node(value, key);
        if (headNode == null && tailNode == null) {
            headNode = newNode;
            tailNode = newNode;
        } else {
            tailNode.next = newNode;
            tailNode = newNode;
        }
    };

    const prepend = (value, key = null) => {
        let newNode = Node(value, key);
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
        if (iterNode == null) {
            return 0;
        }
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
            if (iterNode == null) {
                return null;
            }
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

    const findByKey = (key) => {
        let foundIndex = null;
        let count = 0;
        if (headNode == null && tailNode == null) {
            console.log('no nodes to find');
            return foundIndex;
        } else {
            let iterNode = headNode;
            while (iterNode != null) {
                if (iterNode.key == key) {
                    foundIndex = count;
                    return foundIndex;
                }
                count++;
                iterNode = iterNode.next;
            }
            return foundIndex;
        }
    }

    const getNodeAtKey = (key) => {
        if (headNode == null && tailNode == null) {
            return null;
        } else {
            let iterNode = headNode;
            while (iterNode != null) {
                if (iterNode.key == key) {
                    return iterNode;
                }
                iterNode = iterNode.next;
            }
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

    const getKeys = () => {
        let keys = [];
        if (headNode == null && tailNode == null) {
            return keys;
        }
        let iterNode = headNode;
        while (iterNode != null) {
            keys.push(iterNode.key);
            iterNode = iterNode.next;
        }
        return keys;
    }

    const getValues = () => {
        let values = [];
        if (headNode == null && tailNode == null) {
            return values;
        }
        let iterNode = headNode;
        while (iterNode != null) {
            values.push(iterNode.value);
            iterNode = iterNode.next;
        }
        return values;
    }

    const insertAt = (value, index) => {
        if (index == 0) {
            prepend(value);
            return;
        } else if (index >= size() - 1) {
            append(value);
            return;
        } else {
            let newNode = Node(value);
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
        findByKey,
        getNodeAtKey,
        getKeys,
        getValues,
        toString,
        insertAt,
        removeAt,
    };

};
