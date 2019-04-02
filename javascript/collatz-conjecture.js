export function steps(number) {
    if (number > 0) {
        var count = 0
        while (number !== 1) {
            if (number % 2 === 0) {
                number = number / 2
            } else {
                number = number * 3 + 1
            }
            count++
        }
    } else {
       throw new Error('Only positive numbers are allowed') 
    }

    return count
}