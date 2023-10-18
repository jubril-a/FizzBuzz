function fizzBuzz() {
    arr = [];

    for (let i = 1; i < 100; i++) {
        if (i % 3 && i % 5) {
            arr.push(i);
        } else {
            if (!(i % 3) && !(i % 5)) {
                arr.push('FizzBuzz');
            } else {
                if (!(i % 3)) {
                    arr.push('Fizz');
                } else {
                    arr.push('Buzz')
                }
            }
        }
    }

    return arr
}