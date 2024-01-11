/**
 * Set and Map
 * 
 * Map - as keys we can keep not only just strings, but objects too
 */
const map = new Map();
const objKey = { id: 5 };
map.set(objKey, 'Razo');
console.log(map.get(objKey));

const set = new Set();
set.add('Raz')
set.add('Raz')
set.add('Raz')
set.add('Raz')
console.log(set);