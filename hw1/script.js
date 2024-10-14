/*Определите переменные str, sum, num, flag и txt со значениями «Привет», 123, 15.8,
true, «true», соответственно. При помощи оператора определения типа (typeof)
убедитесь, что переменные принадлежат типам: string, number или boolean. Выведите в
консоль (console.log()) типы операторов.*/

let str = "Привет",
    sum = 123,
    num = 15.8,
    flag = true,
    txt = "true";

console.log(str, typeof str);
console.log(sum, typeof sum);
console.log(num, typeof num);
console.log(flag, typeof flag);
console.log(txt, typeof txt);

let strNum = '78';
console.log(strNum, typeof strNum);


let name = 'Peter';
let lang = 'Python';
let to = 'Olga';


let text = 'Привет, ' + to + '! Меня зовут ' + name + ', я программист на "' + lang + '".';

let text2 = "Привет, " + to + "! Меня зовут " + name + ", я программист на '" + lang + "'.";

let text3 = `Привет, '${to}'! Меня зовут ${name}, я программист на "${lang}".`;

console.log(text);
console.log(text2);
console.log(text3);


/*Есть восемь текстовых строк (создайте 8 переменных), составьте из них грамотные по
смыслу предложения (1 абзац, переменная text):
1. «индо земля зашаталась под ногами-и вырос,»;
2. «и заревел он голосом диким...»;
3. «блеснула молния и ударил гром,»;
4. «а так какое-то чудище, страшное и мохнатое,»;
5. «как будто из-под земли, перед купцом:»;
6. «Он подошёл и сорвал аленький цветочек.»;
7. «зверь не зверь, человек не человек,»;
8. «В ту же минуту, безо всяких туч,».*/

{
    let str1 = "индо земля зашаталась под ногами-и вырос,";
    let str2 = "и заревел он голосом диким...";
    let str3 = "блеснула молния и ударил гром,";
    let str4 = "а так какое-то чудище, страшное и мохнатое,";
    let str5 = "как будто из-под земли, перед купцом:";
    let str6 = "Он подошёл и сорвал аленький цветочек.";
    let str7 = "зверь не зверь, человек не человек,";
    let str8 = "В ту же минуту, безо всяких туч,";

    let text = str6 + str8 + str3 + str1 + str5 + str7 + str4 + str2;

    console.log(text);
}

/* Создайте две строки: firstName и lastName. Объедините их в одну строку с пробелом между ними и сохраните в новой переменной fullName. Текст переменно должен начинатся с "Меня зовут:.", а заканчиваться "Мне 68 лет."*/

let firstName = 'Сергей';
let lastName = 'Краевский';
let fullName = `Меня зовут ${firstName} ${lastName}. Мне 68 лет.`;

console.log(fullName);

/*Напишите скрипт, который находит площадь прямоугольника высотой 23см и
шириной 10см, значение высоты и ширины должны хранится в width и height,
соответственно, а значение площади должно хранится в числовой переменной SPryam.*/

let width = 10; 
let height = 23; 

let SPryam = width * height; 

console.log(SPryam);

/*Напиши скрипт, который находит объем цилиндра высотой 10м и диаметром
основания равным значению 4, результат поместите в
переменную VCilindra.*/

let h = 10;
let d = 4;
const pi = 3.14;

let VCilindra = (pi * Math.pow(d, 2)) / 4 * h;

console.log(VCilindra);

/*Создайте переменную original и присвойте ей значение 100. Создайте новую переменную copy и присвойте ей значение original. Измените original на 200, проверьте значения обеих переменных.*/

let original = 100;
let copy = original;

original = 200;

console.log(original);
console.log(copy);

/*Создайте переменную price и присвойте ей значение 100. Затем создайте переменную discount и присвойте ей значение 0.2 (20%). Вычислите цену со скидкой и выведите результат в консоль: "80 руб, вместо 100 руб".*/

let price = 100;
let discount = 0.2;

console.log(`${price - price * discount} руб, вместо ${price} руб.`);


{

    let a = 23;
    let b = Number("9");

    console.log(a + b);


    let px = parseInt("32px");
    let px2 = parseFloat('18.5px');

    console.log(px + 5);
    console.log(px2);

}

/*Запросите у пользователя два числа А и Б. Выполните сложение двух чисел. Выведите результат в консоль.*/

let numA = prompt('Число А: ', 5),
    numB = prompt('Число Б: ', 2);

let c = +numA + +numB;

console.log(c);