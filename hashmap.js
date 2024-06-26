import { Node, LinkedList } from './linked-lists.mjs';

function HashMap() {
    let buckets = Array(16).fill(null);
    let capacity;
    const loadFactor = 0.75;

    const hash = (key) => {
        let hashCode = 0;
        const primeNumber = 31;
        for (let i = 0; i < key.length; i++) {
            hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % buckets.length;
        }
        return hashCode;
    };

    const set = (key, value) => {
        if (typeof key !== 'string') {
            console.log('Key must be a string')
            return;
        }
        const hashKey = hash(key);
        if (hashKey < 0 || hashKey >= buckets.length) {
            throw new Error('Trying to access index out of bound');
        }
        if (buckets[hashKey] == null) {
            buckets[hashKey] = LinkedList(value, key);
        } else {
            let linkList = buckets[hashKey];
            linkList.append(value, key);
            updateCapacity();
            if (isOverCapacity()) {growBuckets()};
            return;
        }
    };

    const get = (key) => {
        if (typeof key !== 'string') {
            console.log('Key must be a string')
            return;
        }
        const hashKey = hash(key);
        if (hashKey < 0 || hashKey >= buckets.length) {
            throw new Error('Trying to access index out of bound');
        }
        if (has(key)) {
            return buckets[hashKey].getNodeAtKey(key).value;
        } else {
            return null;
        }
    };

    const has = (key) => {
        if (typeof key !== 'string') {
            console.log('Key must be a string')
            return;
        }
        const hashKey = hash(key);
        if (hashKey < 0 || hashKey >= buckets.length) {
            throw new Error('Trying to access index out of bound');
        }
        if (buckets[hashKey]) {
            if (buckets[hashKey].getNodeAtKey(key)) {
                return true;
            } else {
                return false;
            }
        } else {
            return false;
        }
    };

    const remove = (key) => {
        if (typeof key !== 'string') {
            console.log('Key must be a string')
            return;
        }
        const hashKey = hash(key);
        if (hashKey < 0 || hashKey >= buckets.length) {
            throw new Error('Trying to access index out of bound');
        }
        if (has(key)) {
            const removeIndex = buckets[hashKey].findByKey(key);
            buckets[hashKey].removeAt(removeIndex);
            updateCapacity();
            if (isOverCapacity()) {growBuckets()};
            return true;
        } else {
            return false;
        }
    };

    const length = () => {
        let keyCount = 0;
        buckets.forEach((bucket) => {
            if (bucket != null) {
                keyCount += bucket.size()
            }
        });
        return keyCount;
    };

    const clear = () => {
        buckets = Array(buckets.length).fill(null);
        updateCapacity();
        if (isOverCapacity()) {growBuckets()};
    };

    const keys = () => {
        let foundKeys = [];
        buckets.forEach((bucket) => {
            if (bucket != null) {
                foundKeys = foundKeys.concat(bucket.getKeys());
            }
        });
        return foundKeys;
    };

    const values = () => {
        let foundValues = [];
        buckets.forEach((bucket) => {
            if (bucket != null) {
                foundValues = foundValues.concat(bucket.getValues());
            }
        });
        return foundValues;
    };

    const entries = () => {
        let foundKeys = keys();
        let foundValues = values();
        let foundEntries = foundKeys.map((key, ind) => [key, foundValues[ind]])
        return foundEntries;
    };

    const updateCapacity = () => {
        const fullCount = buckets.reduce((accumulator, current) => accumulator + (current != null), 0);
        capacity = fullCount / buckets.length;
    };

    const isOverCapacity = () => {
        (capacity > loadFactor) ? true : false;
    };

    const growBuckets = () => {
        let foundEntries = entries();
        buckets = Array(buckets.length * 2).fill(null);
        foundEntries.forEach((entry) => {
            let key = entry[0];
            let val = entry[1];
            set(key, val);
        });
        updateCapacity();
    }

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
