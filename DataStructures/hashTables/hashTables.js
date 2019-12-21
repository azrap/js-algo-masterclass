class HashTable {
    constructor(size = 53) {
        this.keyMap = new Array(size)
    }

    _hash(key) {
        let total = 0
        let WEIRD_PRIME = 31
        for (let i = 0; i < Math.min(key.length, 100); i++) {
            let char = key[i]
            let value = char.charCodeAt(0) + 96
            total = (total + WEIRD_PRIME + value) % this.keyMap.length
        }
        return total

    }
    set(key, value) {
        let keyHash = this._hash(key)
        let pair = [key, value]
        if (!this.keyMap[keyHash]) {
            this.keyMap[keyHash] = []

        }
        this.keyMap[keyHash].push(pair)
        return keyHash
    }

    // get a key at an index in the hash 
    get(key) {
        //first get the hash
        let index = this._hash(key)
        // then go decode it i.e retrieve the 
        let array = this.keyMap[index]
        if (!array) return undefined

        let element = array.filter(element => element[0] === key)

        if (!element) return undefined

        return element[0]


    }
    // retrieve all the keys for the hash table
    keys() {
        let keys = []
        for (let i = 0; i < this.keyMap.length; i++) {
            if (this.keyMap[i]) {
                for (let j = 0; j < this.keyMap[i].length; j++) {
                    keys.push(this.keyMap[i][j][0])
                }
            }

        }
        return keys

    }
    // retrieve all the values for the hash table
    values() {
        let values = []
        for (let i = 0; i < this.keyMap.length; i++) {
            if (this.keyMap[i]) {
                for (let j = 0; j < this.keyMap[i].length; j++) {
                    values.push(this.keyMap[i][j][1])
                }
            }

        }
        return values

    }
}




ht = new HashTable(10)
console.log(ht.set("salmon", "fish"))
console.log(ht.set("trout", "fish"))
console.log(ht.set("tuna", "fish"))
console.log(ht.get("tuna"))
console.log(ht.get("hamachi"))
console.log(ht.keys())
console.log(ht.values())





function hash1(key, arrayLen) {
    let total = 0
    for (let char of key) {
        let value = char.charCodeAt(0) - 96
        total = (total + value) % arrayLen
    }
    return total
}



function hash(key, arrayLen) {
    let total = 0
    let WEIRD_PRIME = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
        let char = key[i]
        let value = char.charCodeAt(0) - 96
        total = (total + WEIRD_PRIME + value) % arrayLen
    }
}




