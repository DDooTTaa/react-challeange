class ArrayUtilities {
    static addZeros = (numbers) => (numbers.map(x => x * 10))

    static moreThanFifty = (addZeros) => addZeros.filter(addZeros => addZeros > 50)
    static removeFirst = (rest) => {
        const a = rest.slice(1, 5);
        return a;
    }
    static sumAll = (noFirst) => noFirst.reduce((acc, acr) => acc + acr);
    static divide = (sumAll) => (String(sumAll)).split('')
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const addZeros = ArrayUtilities.addZeros(numbers);
console.log(addZeros);

const moreThanFifty = ArrayUtilities.moreThanFifty(addZeros);
console.log(moreThanFifty);

const noFirst = ArrayUtilities.removeFirst(moreThanFifty);
console.log(noFirst);

const sumAll = ArrayUtilities.sumAll(noFirst);
console.log(sumAll);

const divided = ArrayUtilities.divide(sumAll);
console.log(divided);
