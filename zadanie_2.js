// Задание 2.

// Написать функцию, которая принимает на входе любое число (но не больше 1 000), определяет, является ли оно простым, и выводит простое число или нет. 
// Если введено больше 1 000, то выводится сообщение, что данные неверны. Обратите внимание на числа 0 и 1.

function testPromt(num) {
    var sqrtnum=Math.floor(Math.sqrt(num));
      var prime = num != 1;
      for(var i=2; i<sqrtnum+1; i++) { // sqrtnum+1
          if(num % i == 0) {
              prime = false;
              break;
          }
      }
      return prime;
  }
  
  const inputValue = prompt('Введите число');
  
  if (inputValue > 1000){
  //     alert('Ошибка ввода!');
      console.log('Ошибка ввода!')
  }
  else if(inputValue == 0){
      console.log(`число ${inputValue} не является простым`)
  }
  else{
  //     alert( testPromt(inputValue) );
      if (testPromt(inputValue))
        console.log(`число ${inputValue} является простым`)
      else
        console.log(`число ${inputValue} не является простым`)
  }