const arrayOfNumbers: Array<number> = [1, 1, 2, 3, 4]
const arrayOfStrings: Array<string> = ['Hello', 'Tanya']

function reverse<T>(array: T[]): T[] {
    return array.reverse()
}

reverse(arrayOfNumbers)
reverse(arrayOfStrings)