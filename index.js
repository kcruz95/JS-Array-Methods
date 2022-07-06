// JavaScript Array Methods

[1, 2, 3].push(4); // 4 : [1,2,3,4]
[1, 2, 3].pop(); // 3 : [1,2]
[1, 2, 3].shift(); // 1 : [2,3]
['a', 'b'].concat('c'); // ['a','b','c']
['a', 'b', 'c'].join('-'); // ['a-b-c']
['a', 'b', 'c'].slice(1); // ['b', 'c']
['a', 'b', 'c'].indexof('b'); // 1
['a', 'b', 'c'].includes('c'); // true
['a', 'b', 'c'].includes('d'); // false
[3, 5, 6, 8].find((n) n => % 2 === 0); // 6
[2, 4, 3, 5].findIndex((n) n => % 2 !== 0); // 2
[3, 5, 6, 8].map((n) n => * 2); // [6,10,12,16]
[1, 4, 7, 8].filter((n)n => % 2 === 0); // [4,8]
[2, 4, 3, 7].reduce((acc, cur) => acc + cur); // 16
[2, 3, 4, 5].every((x) => x < 6); // true
[2, 3, 4, 5].every((x) => x > 6); // false
[3, 5, 6, 8].some((n) => n < 6); // true
[3, 5, 6, 8].some((n) => n > 6); // true
[1, 2, 3, 4].reverse(); // [4,3,2,1]
[3, 5, 7, 8].at(-2); // 7

console.log();
