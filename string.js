const story = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident culpa nihil repellat nulla laboriosam maxime, quia aliquam ipsam reprehenderit delectus reiciendis molestias assumenda aut fugit tempore laudantium tempora aspernatur? Repellendus consequatur expedita doloribus soluta cupiditate quae fugit! Aliquid, repellat animi, illum molestias maiores, laboriosam vero impedit iusto mollitia optio labore asperiores!";


var { performance } = require('perf_hooks');
var start = performance.now();
const reversed1 = story.split("").reverse().join("");
console.log(`This took ${performance.now() - start} milliseconds to run`);

function reverseString(str) {
    return [...str].reverse().join('')
}

var { performance } = require('perf_hooks');
var start = performance.now();
reverseString(story);
console.log(`This took ${performance.now() - start} milliseconds to run`);