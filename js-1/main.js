// var> let
// const

// let a  = 12
// console.log(a)
// const b = 25
// console.log(b)
// a = 25
// console.log(a)
// b = 40
// console.log(b)

// let a = 'privet mir'
// alert(a)
// a = prompt('title')
// alert(a)

// ТИПЫ ДАННЫХ?
// ПРЕОБРАЗОВАНИЕ ТИПОВ?
// ОПЕРАТОРЫ?
// УСЛОВНЫЕ ВЕТВЛЕНИЯ IF ELSE,
// ЦИКЛЫ
// Конструкциии
// Функциии
// Стрелочные Функциии
// ...

let a = 25
let b = 40
// let c = a + b
// alert(c)
alert(a + b)


// ОПЕРАТОРЫ 

// = - присвоить
// == - равно
// === -  строгое равно ?
// +
// -
// *
// /
// % - остаток от деления 5 / 3 = 1,6 | 5 % 3 = 2
// ** - возведение в степень
// let a = 5
// let b = 3
// alert(a % b)
//  8 % 3

// a = a + 1
// a += 1
// a = b = c = d = f = 25 + 25
// alert(50)

// ОПЕРАТОРЫ СРАВНЕНИЯ

// a<b a>b
// a>=b a<=b
// a == b
// a != b

// ТИПЫ ДАННЫХ 

// n = 12 ЧИСЛО Number
// a = 'привет' строка String
// c = true / false булевый тип Boolean
// typeof - вывод информации о типе ДАННЫХ


// УСЛОВНОЕ  ВЕТВЛЕНИЕ IF 

// if (значение) {
//     результат для выполнения
// }

// let a = prompt('В каком году закончится 2023 год')
// if (a == 2023) {
//     alert('Красава')
// }else if (a < 2023) {
//     alert('не верно')
// }else if (a > 2023) {
//     alert('Чет ты загнул')
// }


// Задача №1 
// написать программу которая проверят сколько вам лет прежде чем пустить на сайт Если указали 18 то вывод сообщения проходите но вам 18, если больше - то просто проходите, если  меньше 18 то не проходите.

// let a = prompt('')
// if (a == 18) {
//     ..
// }else if (a > 18) {
//     ..
// }esle {
//     ..
// }



// #задача  2
// Написать программу которая будет проверять, является ли число четным или нет.
// Число мы вводим с клавиатуры

// let a = prompt()
// if (a % 2 ===0) {
//     alert('Четные')
// }else {
//     alert('не четные')
// }

// Задача 3
// Написать программу которая при сравнее двух числел если они оказываются равными, будет брать сумму этих чисел и прибавлять к ним 1000

// let a = Number(prompt())
// let b = Number(prompt())
// if (a  === b) {
//     let sum = (a + b) + 1000
//     alert(sum)
// }



// ЦИКЛЫ FOR I WHILE
// while for

// while (УСЛОВИЕ) {
//     тело цикла
// }


// Зачачка: вывести числа от  1-10 включительно

// let count = 1
// while (count <= 10) {
//     console.log(count)
//     count++;
// }


// Задачка: найти первое число в последовательности которое делится сразу на 2 и на 3 одвноременно
// let number = 1;
// let found = false;
// while (!found) {
//     if (number % 2 === 0 && number % 3 === 0) {
//         console.log(number)
//     found = true
//     }
//     number++;
//     console.log(number)
// }

// Задача: Подсчет суммы покупок в магазине

// let totalPrice = 0
// let  i = 0
// const prices = [3000,1700,2800,1500,1000]

// while (i < prices.length) {
//     totalPrice += prices[i]
//     i++
// }
// console.log(totalPrice + '$')
// console.log(`Стоимость ${totalPrice}$`)


// Задача Ожидание завершения процессов

// let responseREceived = false
// let timeout = 0

// while (!responseREceived && timeout < 5000 ) {
//     повторные запросы
//     проверки...
//     timeout += 100

// }
// if (responseREceived) {
//     console.log('true')
// }else {
//     console.log('false')
// }


// do...while

// let i = 0
// do {
//     console.log(i)
//     i++
// }while (i > 5)


// let input
// do {
//     input = prompt('введи число больше или равно 10')
// } while (input < 10)
// console.log(input)



// ЦИКЛ FOR 

// for (начало; условие; шаг) {
//     Тело
// }

// for (let i = 0; i < 10; i++) {
//     console.log(i)
// }

// let i = 0
// if (i < 3) {console.log(i);i++}
// if (i < 3) {console.log(i);i++}
// if (i < 3) {console.log(i);i++}
// if (i <= 3) {console.log(i);i++}

// let i = 0

// for (; i < 3;i++) {
//     console.log(i)
// }
// let i = 0
// for (;i<3;) {
//     console.log(i++)
// }
// for (;;) {
//     /вечный
// }


// ПРЕРЫВАНИЕ ЦИКЛА

// let i = 0
// while (true) {
//     let value = +prompt('Чилсо')
//     if (!value) break
//     i += value
// }
// console.log(i)

// ПЕРЕХОД К СЛЕДУЮЩЕЙ ИТЕРАЦИИ

// for (let i = 0; i <10; i++) {
//     if (i % 2 == 0) continue
//     console.log(i)
// }
// Сумма чисел на билете
// let  sum = 0
// for (let i = 1; i <=20;i++) {
//     sum += i
// }
// console.log(sum)

// вывод всех элементов в массиве
// const colors = ['Красный','Желтый','Синий']
// for (let i = 0; i < colors.length;i++) {
//     console.log(colors[i])
// }



// ЛОГИЧЕСКИЕ ОПЕРАТОРЫ

// || - или
// && - и
// ! - НЕ



// МАССИВЫ

// пустой массив
// let arr = new Array()
// let arr = []

// let fru = ['Эрик','Кот','Ноутбук']
// console.log(fru[2])


// const users = [
//     {name: 'Erik', age: 25},
//     {name: 'Yota', age: 30},
//     {name: 'aLice', age: 12},
//     {name: 'Mark', age: 99},
//     {name: 'Adalinda', age: 123},
//     {name: 'Grim', age: 54},
//     {name: 'Alex', age: 34},
//     {name: 'Blade', age: 22},
//     {name: 'Strelok', age: 20},
    
// ]

// let count = 0
// const targetLetter = "A"
// for (let i = 0; i < users.length;i++) {
//     const firstLetter = users[i].name.charAt(0).toUpperCase()
//     if (firstLetter === targetLetter) {
//         count++;
//     }
// }
// console.log(count)




// Конструкция switch case

// let a = prompt('string')
// console.log(typeof(a))

// switch(a) {
//     case 3:
//         alert('Не угарадл, слишком мало');
//         break;
//     case 6:
//         alert('Все равно мало');
//         break;
//     case 8:
//         alert('Угадал');
//         break;
//     default:
//         alert('такого нет в игре')
// }


// let a = 10
// switch(a) {
//     case 4:
//         alert()
//         break
//     case 6:
//     case 8:
//         alert('error')
//         break
// }   



//     if (day == 1) {
//         return 'понедельник'
//     }else if (day ==2) {
//         return 'Вторник'
//     }else if (day ==3) {
//         return 'Среда'
//     }else if (day ==4) {
//         return 'Четверг'
//     }else if (day ==5) {
//         return 'Пятница'
//     }else if (day ==6) {
//         return 'Суббота'
//     }else if (day ==7) {
//         return 'Воскресенье'
//     }else {
//         return 'не коректное значение'
//     }

// switch (day) {
//     case 1:
//         return 'понедельник'
//     case 2:
//         return 'вторник'
//     case 3:
//         return 'Среда'
//     ...
//     default:
//         return 'Некоректное значение'
// }

// switch(action) {
//     case 'login':
//         // выполнит вход в систему
//         break
//     case 'logout':
//         //выйти из системы
//         break
//     case 'create':
//         //создание нового элемента
//         break
//     default:
//         //обрабатываем другие сценарии.
    
// }


// function имя(параметр) {
//     //Тело функции
// }
// имя()


// function showmMessage() {
//     alert('hello world')
// }
// showmMessage()

// let user = 'erik'
// function showmMessage() {
//     user = 'Masha'
//     let message = 'hello    ' + user
//     alert(message)
// }
// showmMessage()

// function showmMessage() {
//     let message = 'Hello'
//     alert(message)
// }
// showmMessage();

// function showmMessage(from, text){
//     alert(from + ': ' + text)
// }
// showmMessage('Erik', 'Когда отправите html/css работу на проверку?)')


// Задача 1 Функция проверки на четность.

// function isEven(num) {
//     return num % 2 ===0;
// }
// console.log(isEven(4))
// console.log(isEven(5))
// console.log(isEven(6))
// console.log(isEven(7))

// document.getElementById("myButton").addEventListener("click", function() {
//     document.getElementById("output").innerText = 'Hello World'
// });



// let button = document.getElementById("myButton")
// let output = document.getElementById("output")
// let isTextVisible = false


// button.addEventListener("click",
// function() {
//     if (isTextVisible) {
//         output.style.display ="none"
//         isTextVisible = false
//     }else {
//         output.innerText = "Hello world"
//         output.style.display = "block"
//         isTextVisible = true
//     }
// })

// let button = document.getElementById("myButton")
// let output = document.getElementById("output")

// button.addEventListener("click",
// function() {
//     if (output.style.display === "none" || output.innerText === "") {
//         output.innerText = "hello"
//         output.style.display = "block"
//     }else {
//         output.style.display = "none"
//     }
// })

// function имя (параметры) {
//     тело функции(любые выражени/команды)
// }

// function showmMessage(email, paswword) {
//     alert(from + text)
// }
// showmMessage('erik', 'hello world')

// function calccheckbuy(purchases) {
//     let totalAmout = 0
//     for (let i  = 0; i < purchases.length;i++) {
//         totalAmout  += purchases[i]
//     }
//     const average = totalAmout / purchases.length
//     return average.toFixed(2)
// }

// const purchases = [150,200,300,100,500,10]
// const averagePurchases = calccheckbuy(purchases)
// console.log(averagePurchases)


// Сумму элементов в массиве + найти среднее значение

// function sumArr(arr) {
//     return arr.reduce((acc, curr) => acc + curr, 0)
// }

// function findAverage(arr) {
//     const sum = sumArr(arr)
//     return sum / arr.length
// }


// const someNumbers = [34, 35, 49, 38, 17, 46]
// const totalsum = sumArr(someNumbers)
// const averageValue = findAverage(someNumbers)
// console.log(totalsum)
// console.log(averageValue)


// function one() {
//     setTimeout( function(){
//         console.log(1)
//     },500)
//     console.log('one')
// }

// function two() {
//     console.log('two')
// }
// one()
// two()

// one main.js
// two main.js
// 1

// let a = function () {
//     console.log('hi')
// }
// a()

// let a = function Erik() {
//     console.log('hi')
// }
// a()


// let a = function () {
//     console.log()
// }

// let a = () => console.log('hi')
// a()

// let  a  = () =>  {
//     let b = 13;
//     let c = 20;
//     return b + c
// }
// console.log(a())


// function SumCalc(a,b) {
//     return a+b
// }

// console.log(SumCalc(12,24))



// let a = document.getElementById('one')
// a.style.background = "red"
// let a = document.querySelector('#one')
// a.style.background = "red"
// let a = document.querySelectorAll('li')
// let b = a[2]
// b.style.color = "red"
// let a = document.querySelector('ul')
// a.style.color = "red"
// let a = document.querySelectorAll('li')
// a.forEach(function(i) {
//     i.style.color = "red"
// })
// let a = document.querySelector("#one")
// console.log(a.textContent.length)
// элемент.обращение/значение

// let a = document.createElement('div')
// let txt = document.createTextNode('Hello World')
// a.appendChild(txt)
// document.body.appendChild(a)


// const btn = document.getElementById('btn')
// btn.addEventListener("click",
// function() {
//     createsquare()
// })

// function createsquare() {
//     const square = document.createElement("div")
//     square.className = "square"
//     document.body.appendChild(square)
//     const mxWidth = window.innerWidth - square.offsetWidth
//     const ranomX = Math.floor(Math.random() * mxWidth)
//     square.style.left  = ranomX + "px"


//     const gravity = 10
//     const intervalVelocity = 100
//     const timeInc = 0.001
//     let currPosition = 0
//     let currVelocity = intervalVelocity


//     const  animation = setInterval(function(){
//         currVelocity += gravity + timeInc
//         currPosition += currVelocity + timeInc

//         if (currPosition >= window.innerHeight - square.offsetHeight) {
//             clearInterval(animation)
//             square.style.buttom = "0"
//             square.addEventListener("click", function(){
//                 square.classList.add("poof")
//                 setTimeout( function() {
//                     document.body.removeChild(square)
//                 }, 500);
//             });
//         }else {
//             square.style.top  = currPosition + "px"
//             handcoliision(square)
//         }
//     },timeInc * 1000)
// }

// function handcoliision(square) {
//     const squares = document.getElementsByClassName("square")
//     Array.from(squares).forEach((othersquare) => {
//         if (othersquare !== square && isColl(square, othersquare)) {
//             const squareBot = square.offsetTop  + square.offsetHeight
//             const otherSquareTop = othersquare.offsetTop
//             if (squareBot > otherSquareTop) {
//                 const newTop = otherSquareTop - square.offsetHeight
//                 square.style.top = newTop + "px"
//             }
//         }
//     })
// }

// function backspace() {
//     let display = document.getElementById('display')
//     display.value = display.value.slice(0, -1)
// }


// let int1 = document.querySelector("#inp1").value
// console.log(int1)
// console.log(typeof(int1))

// function sum(int1, int2) {
//     return int1 + int2
// }


// let btn = document.querySelector(".no-active")
// btn.addEventListener("click", function() {
//     btn.classList.toggle('active') 
// })

// const btn = document.querySelectorAll('button')
// let input = document.getElementById("display")
// btn.forEach(button  => {
//     button.addEventListener("click", function() {
//         const value = this.getAttribute('data-value')
//         input.value += value
//     })
// })

// document.querySelectorAll('button').forEach(button => button.addEventListener("click", event => document.getElementById("display").value  += event.target.value))

// let user = {
//     name: 'ERik',
//     age: 27
// }

// function hi() {
//     alert('hi')
// }
// user.hi = hi
// user.hi()

// let user = {
//     name: 'ERik',
//     age: 27,

//     hi() {
//         alert(this.name)
//     }
// }
// user.hi()


// Event.TARGET IN JS
// ссылка на элемент, который является источником события

// const button = document.querySelector('button')
// button.addEventListener("click", function(event) {
//     console.log(event.target)
// })

// event.target - вслучае всплытия событий, event.target будет указывать на элемент, на котором произошло событие, но если есть вложенные элементы, то они будут ссылаться на родительский. 

// event.currentTarget - невелирует то что проиходит сверху при вложенных элементах . Потому что всегда будет ссылаться на элемент на котором находится обработчик.


// MODAL WINDOW

// function openModal() {
//     document.getElementById('myMolda').style.display = "block"
// }
// function closeModal() {
//     document.getElementById('myMolda').style.display = "none"
// }

// window.onclick = function(event) {
//     const modal = document.getElementById('myMolda')
//     if (event.target == modal) {
//         modal.style.display = "none"
//     }
// }

// как получить в переменную test 0 ?
// let test = Number('ddd');
// console.log(typeof(test)) 
// console.log(test + 7)

// в php при приведении строки к числу получается 0, есть ли аналог в js


// undefined - фтулка от бумаги
// null - ни бумаги ни фтулки 
// NaN - НЕ ЧИСЛО

// let test = 'ddd';
// let sum = +test || 0
// console.log(sum)

// let num = isNaN(test)?0:+test
// console.log(num)

// function changeImage() {
//     const  image = document.getElementById('myImg')
//     image.src = "https://img1.akspic.ru/attachments/crops/1/9/4/4/94491/94491-dikaya_koshka-zhivaya_priroda-koshki_malogo_i_srednego_razmera-bakenbardy-usy-2560x1440.jpg"
// }

// const  image = document.querySelector('.image-container img')
// const overlay = document.querySelector('.image-overlay')
// overlay.addEventListener('mouseover', function() {
//     image.src = "https://img1.akspic.ru/attachments/crops/1/9/4/4/94491/94491-dikaya_koshka-zhivaya_priroda-koshki_malogo_i_srednego_razmera-bakenbardy-usy-2560x1440.jpg"
// })
// overlay.addEventListener('mouseout', function() {
//     image.src = "https://sun9-71.userapi.com/OTiA9MicXLXEjC5y70k1AJXmgKwuYxS6Q7nAVw/65Ao8mJKiH0.jpg"
// })

// const image = document.querySelector("img")
// image.addEventListener('mouseover', function() {
//     image.src = "https://img1.akspic.ru/attachments/crops/1/9/4/4/94491/94491-dikaya_koshka-zhivaya_priroda-koshki_malogo_i_srednego_razmera-bakenbardy-usy-2560x1440.jpg"
// })
// image.addEventListener('mouseout', function(){
//     image.src = "https://sun9-71.userapi.com/OTiA9MicXLXEjC5y70k1AJXmgKwuYxS6Q7nAVw/65Ao8mJKiH0.jpg"
// })