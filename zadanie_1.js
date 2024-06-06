// Задание 1.
// оформите решение в виде функции, постарайтесь дать этой функции корректное название!

const arr = [0, null, NaN, 0, 1, 2, 4, "str"]
function arrChet(arr){
    let even = 0,  odd = 0, zero = 0;

        for (let i = 0; i < arr.length; i++) {
            if (typeof arr[i] === 'number' && !isNaN(arr[i])) {
                if (arr[i] === 0) {
                    zero += 1;
                } else if (arr[i] % 2 === 0) {
                    even += 1;
                } else {
                    odd += 1;
                }
            }
        }

    console.log('четных элементов: ', even);
    console.log('нечетных элементов: ', odd);
    console.log('нулей: ', zero);
}
arrChet(arr);



  








// Задание 5.

// Напишите функцию, которая принимает два натуральных числа x и n и возвращает x в степени n. Иначе говоря, умножает x на себя n раз и возвращает результат.

// Используйте Arrow Function синтаксис.

// Протестируйте функцию на любых значениях и выведите результат в консоль.


const sayPow = (a, b) => {
    console.log(a ** b);
    }
  
sayPow(2, 5)

sayPow(5, 3)