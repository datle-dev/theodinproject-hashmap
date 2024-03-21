import { Node, LinkedList } from './linked-lists.mjs';

function HashMap() {
    let bucket = [];
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

    };

    const get = (key) => {

    };

    const has = (key) => {

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
});