export function getRandomValue<type> (items: type[]): type {
    const itemLength = items.length
    const index = Math.floor(Math.random() * itemLength)
    return items[index]
}

export function getRandomNum (num: number): number {
    const array = Array.from(Array(num))
    const numbers = array.map((d, index) => index + 1)
    return getRandomValue(numbers)
}
  
export function fakePhone (): string {
    let result = '+628'
    const numbers = '0123456789'.split('')

    for (let i = 0; i < 9; i++) {
        result += getRandomValue(numbers)
    }

    return result
}

export function fakeId (num: number): string {
    let result = ''
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'.split('')

    for (let i = 0; i < num; i++) {
        result += getRandomValue(characters)
    }

    return result
}
