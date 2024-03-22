import { Node, LinkedList } from './linked-lists.mjs';

function HashMap() {
    let bucket = Array(16).fill(null);
    let capacity;
    const loadFactor = 0.75;

    const hash = (key) => {
        let hashCode = 0;
        const primeNumber = 31;
        for (let i = 0; i < key.length; i++) {
            hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % 16;
        }
        return hashCode;
    };

    const set = (key, value) => {
        if (typeof key !== 'string') {
            console.log('Key must be a string')
            return;
        }
        const hashKey = hash(key);
        if (bucket[hashKey] == null) {
            bucket[hashKey] = LinkedList(value, key);
        } else {
            let linkList = bucket[hashKey];
            linkList.append(value, key);
            return;
        }
    };

    const get = (key) => {
        if (typeof key !== 'string') {
            console.log('Key must be a string')
            return;
        }
        const hashKey = hash(key);
        if (bucket[hashKey] == null) {
            return null;
        } else {
            return bucket[hashKey].getNodeAtKey(key).value;
        }
    };

    const has = (key) => {
        if (typeof key !== 'string') {
            console.log('Key must be a string')
            return;
        }
        const hashKey = hash(key);
        if (bucket[hashKey]) {
            if (bucket[hashKey].getNodeAtKey(key)) {
                return true;
            } else {
                return false;
            }
        } else {
            return false;
        }
    };

    const remove = (key) => {

    };

    const length = () => {

    };

    const clear = () => {

    };

    const keys = () => {

    };

    const values = () => {

    };

    const entries = () => {

    };

    const updateCapacity = () => {
        const fullCount = bucket.reduce((accumulator, current) => accumulator + (current != null), 0);
        capacity = fullCount / bucket.length;
    };

    const isOverCapacity = () => {
        (capacity > loadFactor) ? true : false;
    };

    return {
        hash,
        set,
        get,
        has,
        remove,
        length,
        clear,
        keys,
        values,
        entries,
    }
};
