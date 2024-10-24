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
const sumNum: number = numbers.reduce((acum, num) => acum + num);
const message: string = 'Esto es un ejemplo de cadena';
const words: string[] = message.split(' ');
const messageJoin: string = words.join(',');
const arrayNum: number[] = [10, 20, 30, 40, 50];
const numMayor: number = arrayNum.find((num) => num > 25);
const allPositive: boolean = arrayNum.every((num) => num >= 0);
const oneMayor: boolean = arrayNum.some((num) => num > 40);
const array1: number[] = [1, 2, 3];
const array2: number[] = [4, 5, 6];
const conactArrays: number[] = array1.concat(array2);
const array3: number[] = [5, 1, 4, 2, 3];
const orderArray: number[] = array3.sort((a, b) => a - b);
const reverseArray: number[] = orderArray.reverse();
const names: string[] = ['Kevin', 'Andres', 'Camila', 'Sara'];
const orderNames: string[] = names.sort();
const numberInclude: boolean = arrayNum.includes(4);
