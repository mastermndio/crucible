export function sumOfMultiples(multiples, limit) {
    var total = 0;
    //Run a loop the same number of times as my limit
    for (var i = 0;i < limit; i++) {
        //Run loop for as many items are in multiples array
        for (var x = 0; x < multiples.length; x++) {
            if (i % multiples[x] === 0) {
                total += i;
                break;
            }
        }
    }

    return total
}

console.log(sumOfMultiples([5, 6, 8], 150))



