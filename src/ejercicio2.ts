const numbers: number[] = [1, 2, 3, 4, 5];
const fruits: string[] = ['Manzana', 'Pera', 'Kiwi', 'Piña'];
const booleans: boolean[] = [true, false, false, true];
// tupla

numbers.push(6);
numbers.pop();
const index: number = numbers.indexOf(3);
const sectionArray: number[] = numbers.slice(1, 4);
const mapNum: number[] = numbers.map((num) => num * num);
const paresNum: number[] = numbers.filter((num) => num % 2 === 0);
