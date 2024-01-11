/**
 * Hash Table
 * 
 * Хеш-таблица — это структура данных, которая строится по принципу ключ-значение. Из-за высокой скорости поиска значений по ключам, она используется в таких структурах, как Map, Dictionary и Object. Как показано на рисунке, хеш-таблица имеет hash function, преобразующую ключи в список номеров, которые используются как имена (значения) ключей. Время поиска значения по ключу может достигать O(1). Одинаковые ключи должны возвращать одинаковые значения — в этом суть функции хэширования.
 */

/* Example 1 */

class HashTable {
    constructor() {
        this.table = {};
    }

    add(key, value) {
        this.table[key] = value;
    }

    get(key) {
        return this.table[key];
    }

    remove(key) {
        delete this.table[key];
    }
}

// Example usage:
const hashTable = new HashTable();
hashTable.add("name", "John");
console.log(hashTable.get("name")); // Output: John
hashTable.remove("name");
// console.log(hashTable.get("name")); // Output: undefined

/* Example 2 */

class HashTable2 {
    constructor() {
        this.storage = []
        this.storageLimit = 4
    }

    add(key, value) {
        let index = this.hash(key)
        if (this.storage[index] === undefined) {
            this.storage[index] = [
                [key, value]
            ]
        } else {
            let inserted = false
            for (let i = 0; i < this.storage[index].length; i++) {
                if (this.storage[index][i][0] === key) {
                    this.storage[index][i][1] = value
                    inserted = true
                }
            }
            if (inserted === false) {
                this.storage[index].push([key, value])
            }
        }
    }

    remove(key) {
        let index = this.hash(key)
        if (this.storage[index].length === 1 && this.storage[index][0][0] === key) {
            delete this.storage[index]
        } else {
            for (let i = 0; i < this.storage[index]; i++) {
                if (this.storage[index][i][0] === key) {
                    delete this.storage[index][i]
                }
            }
        }
    }

    lookup(key) {
        let index = this.hash(key)
        if (storage[index] === undefined) {
            return undefined
        } else {
            for (let i = 0; i < storage[index].length; i++) {
                if (storage[index][i][0] === key) {
                    return storage[index][i][1]
                }
            }
        }
    }

    hash(string) {
        let hash = 0
        for (let i = 0; i < string.length; i++) {
            hash += string.charCodeAt(i)
        }
        return hash % this.storageLimit
    }
}

const hashTable2 = new HashTable2();
hashTable2.add('name', 'Razo');
console.log(hashTable2.storage);